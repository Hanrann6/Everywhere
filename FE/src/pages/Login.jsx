import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  StyledHeader,
  StyledContent,
} from '../components/Login/Container';
import { Button, TextButton } from '../components/Login/Button';
import { Input } from '../components/Login/Input';

function Login() {
  const navigate = useNavigate();

  const [userEmail, setUserEmail] = useState('');
  const [userPW, setUserPW] = useState('');
  const [loginCheck, setLoginCheck] = useState(false);

  const handleUserEmail = event => {
    setUserEmail(event.target.value);
  };
  const handleUserPW = event => {
    setUserPW(event.target.value);
  };
  const handleSubmit = async event => {
    event.preventDefault();
    const response = await fetch('/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: userEmail, password: userPW }),
    });
    const result = await response.json();
    if (response.status === 200) {
      setLoginCheck(true);
      sessionStorage.setItem('email', result.email);
      console.log('로그인 성공, 이메일 주소:' + result.email);
      navigate('/');
    } else if (response.status === 400) {
      console.log('로그인 실패, 이메일 혹은 비밀번호가 틀림');
    } else {
      console.log('로그인 실패, 존재하지 않는 계정');
    }
  };

  return (
    <Container>
      <StyledHeader>
        <h1> Everywhere </h1>
      </StyledHeader>
      <StyledContent>
        <form method="post" action="/user/login">
          <Input
            type="text"
            name="userEmail"
            value={userEmail}
            onChange={handleUserEmail}
            placeholder="이화여자대학교 이메일을 입력하세요."
            autoFocus
            required
          />
          <Input
            type="password"
            name="userPW"
            value={userPW}
            onChange={handleUserPW}
            placeholder="비밀번호를 입력하세요"
            required
          />
          <Button onClick={handleSubmit}> 로그인 </Button>
        </form>
      </StyledContent>
      <TextButton>아직 회원이 아니신가요? </TextButton>
    </Container>
  );
}

export default Login;
