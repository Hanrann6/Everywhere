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

//TODO: 체크박스 테두리 만들기;

function SignUp() {
  const inputStyle = {
    width: '562px',
    margin: '0px 0px 40px 0px',
  };
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState('');
  const [userPW, setUserPW] = useState('');
  const [confirmPW, setConfirmPW] = useState('');

  const handleUserEmail = event => {
    setUserEmail(event.target.value);
  };
  const handleUserPW = event => {
    setUserPW(event.target.value);
    if (userPW !== confirmPW) {
      //return <TextS content="비밀번호가 일치하지 않습니다." />;
    }
  };

  const handleSignup = async event => {
    event.preventDefault();
    const payload = {
      email: userEmail,
      password: userPW,
    };

    try {
      const response = await fetch('/user/create', {
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
              style={inputStyle}
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
              style={inputStyle}
              type="password"
              name="userPassword"
              value={userPW}
              onChange={handleUserPW}
              placeholder="비밀번호"
              required
            />
            {/*비밀번호 구성 확인 함수*/}
          </label>
          <label>
            <h3> 비밀번호를 다시 입력하세요 </h3>
            <Input
              style={inputStyle}
              type="password"
              name="userPassword"
              value={userPW}
              onChange={handleUserPW}
              placeholder="비밀번호"
              required
            />
            {/*비밀번호 일치 확인 함수*/}
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
