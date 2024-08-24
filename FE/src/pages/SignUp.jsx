import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Checkbox } from '../components/SignUp/Checkbox';
import { Input } from '../components/Login/Input';
import { Button } from '../components/Login/Button';
import { GoBack } from '../components/common/GoBack';
import { TextButton } from '../components/Login/Button';
import {
  Container,
  StyledHeader,
  StyledContent,
  AlignToCenter,
} from '../components/SignUp/Container';
import { API_URL } from '../constants';

//TODO: 체크박스 테두리 만들기;

function SignUp() {
  const navigate = useNavigate();

  const [userEmail, setUserEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRetype, setPasswordRetype] = useState('');

  // 유효성 검사
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isPasswordLengthValid, setIsPasswordLengthValid] = useState(true);
  const [isPasswordCharacterValid, setIsPasswordCharacterValid] =
    useState(true);
  const [isPasswordMatch, setIsPasswordMatch] = useState(true);

  const handleUserEmail = event => {
    setUserEmail(event.target.value);
  };

  const handlePassword = event => {
    const value = event.target.value;
    setPassword(value);

    // 길이: 8 ~ 20
    const lengthValid = value.length >= 8 && value.length <= 20;
    setIsPasswordLengthValid(lengthValid);

    // 구성: 영문, 숫자
    const characterValid = /^[A-Za-z0-9]+$/.test(value);
    setIsPasswordCharacterValid(characterValid);

    // 조건 만족
    setIsPasswordValid(lengthValid && characterValid);

    // 비밀번호 재확인
    setIsPasswordMatch(value === passwordRetype);
  };

  const handlePasswordRetype = event => {
    const value = event.target.value;
    setPasswordRetype(value);
    setIsPasswordMatch(password === value);
  };

  function goToHome() {
    navigate('/');
  }

  const handleSubmit = async event => {
    event.preventDefault();

    if (!isPasswordValid || !isPasswordMatch) {
      return;
    }

    const payload = {
      email: userEmail,
      password: password,
    };

    try {
      const response = await fetch(`${API_URL}/user/create`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (response.status === 200) {
        alert(`회원가입 성공: ${result.email}`);
        goToHome();
      } else if (response.status === 400) {
        alert(`회원가입 실패: ${result.message}`);
      }
    } catch (error) {
      alert('오류 발생:', error);
    }
  };

  return (
    <Container>
      <div>
        <h1
          style={{
            fontSize: '27px',
            fontWeight: '1500',
            textAlign: 'center',
          }}
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
              margin: '20px 30px 20px 10px',
            }}
            onClick={() =>
              window.open('/termofuse', 'popup', 'width=770, height=500')
            }
          >
            전문 보기
          </TextButton>
        </label>
      </StyledHeader>

      <StyledContent>
        <form onSubmit={handleSubmit}>
          <label>
            <h3> 학교 이메일 계정을 입력하세요 </h3>
            <Input
              type="email"
              name="userEmail"
              value={userEmail}
              onChange={handleUserEmail}
              placeholder="E-mail"
              autoFocus
              required
            />
          </label>
          <label>
            <h3> 비밀번호를 입력하세요 </h3>
            <Input
              type="password"
              name="password"
              value={password}
              onChange={handlePassword}
              placeholder="비밀번호"
              required
            />
            {!isPasswordLengthValid && (
              <div className="failure-message" style={{ color: 'red' }}>
                8~20 글자이어야 합니다
              </div>
            )}
            {!isPasswordCharacterValid && (
              <div className="failure-message2" style={{ color: 'red' }}>
                영어 또는 숫자만 가능합니다
              </div>
            )}
            {isPasswordValid && (
              <div className="success-message" style={{ color: 'green' }}>
                사용할 수 있는 비밀번호입니다
              </div>
            )}
          </label>
          <label>
            <h3> 비밀번호를 다시 입력하세요 </h3>
            <Input
              type="password"
              id="passwordRetype"
              name="passwordRetype"
              value={passwordRetype}
              onChange={handlePasswordRetype}
              placeholder="비밀번호"
              required
            />
            {!isPasswordMatch && (
              <div className="mismatch-message" style={{ color: 'red' }}>
                비밀번호가 일치하지 않습니다
              </div>
            )}
          </label>
          <AlignToCenter>
            <Button style={{ margin: '40px auto' }} type="submit">
              Everywhere 회원가입
            </Button>
          </AlignToCenter>
        </form>
      </StyledContent>
    </Container>
  );
}
export default SignUp;
