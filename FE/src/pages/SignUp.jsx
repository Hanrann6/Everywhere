import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Checkbox } from '../components/SignUp/Checkbox';
import { Input } from '../components/Login/Input';
import { Button } from '../components/Login/Button';
import { TextButton } from '../components/Login/Button';
import {
  Container,
  StyledHeader,
  StyledContent,
  AlignToCenter,
} from '../components/SignUp/Container';
import '../styles/SignUp.css';

//TODO: 체크박스 테두리 만들기;

function SignUp() {
  const navigate = useNavigate();

  const api =
    'ec2-3-25-114-45.ap-southeast-2.compute.amazonaws.com/user/create';

  let elInputPassword = document.querySelector('#password');
  let elInputPasswordRetype = document.querySelector('#password-retype');
  let elSuccessMessage = document.querySelector('.success-message'); // div.success-message.hide //1. 성공 메시지
  let elFailureMessage = document.querySelector('.failure-message'); //2. 글자수 위반
  let elFailureMessageTwo = document.querySelector('.failure-message2'); //3. 구성 문자 위반
  let elMismatchMessage = document.querySelector('.mismatch-message'); // div.mismatch-message.hide // 4. 비밀번호 불일치

  const [userEmail, setUserEmail] = useState('');
  const handleUserEmail = event => {
    setUserEmail(event.target.value);
  };

  const [password, setPassword] = useState('');
  const [passwordRetype, setPasswordRetype] = useState('');
  const handlePassword = event => {
    setPassword(event.target.value);
  };
  const handlePasswordRetype = event => {
    setPasswordRetype(event.target.value);
  };
  const handleSignup = async event => {
    event.preventDefault();
    const payload = {
      email: userEmail,
      password: password,
    };

    function passwordLength(value) {
      return value.length >= 8 && value.length <= 20;
      //8~20d일 경우 true 반환
    }
    function onlyNumberAndEnglish(str) {
      return /^[A-Za-z0-9][A-Za-z0-9]*$/.test(str);
      //영어 또는 숫자만 가능
    }
    function isMatch(password1, password2) {
      return password1 === password2;
      //비밀번호 확인
    }
    elInputPassword.handlePassword = function () {
      // 값을 입력한 경우
      if (elInputPassword.value.length !== 0) {
        // 영어 또는 숫자
        if (onlyNumberAndEnglish(elInputPassword) === false) {
          elSuccessMessage.classList.add('hide');
          elFailureMessage.classList.add('hide');
          elFailureMessageTwo.classList.remove('hide'); // 영어 또는 숫자만 가능합니다
          elMismatchMessage.classList.add('hide');
        }
        // 글자 수
        else if (passwordLength(elInputPassword.value) === false) {
          elSuccessMessage.classList.add('hide');
          elFailureMessage.classList.remove('hide'); // 8-20 글자 사이로 입력하세요
          elFailureMessageTwo.classList.add('hide');
          elMismatchMessage.classList.add('hide');
        }
        // 조건을 모두 만족
        else if (
          passwordLength(elInputPassword.value) &&
          onlyNumberAndEnglish(elInputPassword.value)
        ) {
          elSuccessMessage.classList.remove('hide'); // 사용할 수 있는 아이디입니다
          elFailureMessage.classList.add('hide');
          elFailureMessageTwo.classList.add('hide');
          elMismatchMessage.classList.add('hide');
        }
      }
      // 값을 입력하지 않은 경우 (지웠을 때)
      // 모든 메시지를 가린다.
      else {
        elSuccessMessage.classList.add('hide');
        elFailureMessage.classList.add('hide');
        elFailureMessageTwo.classList.add('hide');
        elMismatchMessage.classList.add('hide');
      }
    };

    if (elInputPasswordRetype.value.length !== 0) {
      if (isMatch(elInputPassword.value, elInputPasswordRetype.value)) {
        elMismatchMessage.classList.add('hide'); // 실패 메시지가 가려져야 함
      } else {
        elMismatchMessage.classList.remove('hide'); // 실패 메시지가 보여야 함
      }
    } else {
      elMismatchMessage.classList.add('hide'); // 실패 메시지가 가려져야 함
    }

    try {
      const response = await fetch(api, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (response.status === 200) {
        console.log(`회원가입 성공: ${result.email}`);
        navigate('/Login');
      } else if (response.status === 400) {
        alert(`회원가입 실패: ${result.email}`);
      }
    } catch (error) {
      console.error('오류 발생:', error);
    }
  };

  return (
    <Container>
      <div>
        <h1
          style={{ fontSize: '27px', fontWeight: '1500', textAlign: 'center' }}
        >
          회원가입
        </h1>
        <h3 style={{ fontSize: '17px', textAlign: 'center' }}>
          Everywhere 계정으로 다양한 학교 시설 정보를 찾을 수 있습니다.
        </h3>
      </div>

      <StyledHeader>
        <label>
          <h2
            style={{
              fontSize: '25px',
              fontWeight: 'bold',
              margin: 0,
            }}
          >
            약관 동의
          </h2>
          <Checkbox type="checkbox" value="y" required />
          &nbsp;&nbsp;이용약관의 전문을 확인하였으며, 이에 동의합니다.
          <TextButton
            style={{
              textDecorationLine: 'none',
              color: '#00462a',
            }}
            onClick={() => navigate('/termofuse')}
          >
            전문 보기
          </TextButton>
        </label>
      </StyledHeader>

      <StyledContent>
        <form>
          <label>
            <h3> 학교 이메일 계정을 입력하세요 </h3>
            <Input
              //style={{ inputStyle }}
              type="email"
              name="userEmail"
              value={userEmail}
              onChange={handleUserEmail}
              placeholder
              E-mail
              autoFocus
              required
            />
          </label>
          <label>
            <h3> 비밀번호를 입력하세요 </h3>
            <Input
              //style={{ inputStyle }}
              type="password"
              name="userPassword"
              value={password}
              onChange={handlePassword}
              placeholder="비밀번호"
              required
            />
            <div className="success-message hide">
              사용할 수 있는 비밀번호입니다
            </div>
            <div className="failure-message hide"> 8~20 글자이어야 합니다</div>
            <div className="failure-message2 hide">
              영어 또는 숫자만 가능합니다
            </div>
          </label>
          <label>
            <h3> 비밀번호를 다시 입력하세요 </h3>
            <Input
              //style={{ inputStyle }}
              type="password"
              id="passwordRetypee"
              name="passwordRetype"
              value={passwordRetype}
              onChange={handlePasswordRetype}
              placeholder="비밀번호"
              required
            />
            <div className="mismatch-message hide">
              비밀번호가 일치하지 않습니다
            </div>
            <AlignToCenter>
              <Button style={{ margin: '40px auto' }} onClick={handleSignup}>
                Everywhere 회원가입
              </Button>
            </AlignToCenter>
          </label>
        </form>
      </StyledContent>
    </Container>
  );
}

export default SignUp;
