import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  StyledHeader,
  StyledContent,
} from '../components/Login/Container';
import { Button, TextButton } from '../components/Login/Button';
import { Input } from '../components/Login/Input';
import { Footer } from '../components/common/Footer';

function Login() {
  const navigate = useNavigate();
  const api = 'ec2-3-25-114-45.ap-southeast-2.compute.amazonaws.com/user/login';

  const [userEmail, setUserEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleUserEmail = event => {
    setUserEmail(event.target.value);
  };

  const handlePassword = event => {
    setPassword(event.target.value);
  };

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      const response = await fetch(api, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: userEmail, password: password }),
      });

      const result = await response.json();

      if (response.status === 200) {
        sessionStorage.setItem('email', result.email);
        console.log('로그인 성공, 이메일 주소:' + result.email);
        navigate('/');
      } else if (response.status === 400) {
        console.log('로그인 실패, 이메일 혹은 비밀번호가 틀림');
      } else {
        console.log('로그인 실패, 존재하지 않는 계정');
      }
    } catch (error) {
      console.error('로그인 중 오류 발생:', error);
    }
  };

  return (
    <Container>
      <StyledHeader>
        <h1> Everywhere </h1>
      </StyledHeader>
      <StyledContent>
        <form method="post" onSubmit={() => handleSubmit}>
          <Input
            type="email"
            name="email"
            value={userEmail}
            onChange={handleUserEmail}
            placeholder="E-mail"
            placeholder="E-mail"
            autoFocus
            required
          />
          <Input
            type="password"
            name="userPW"
            value={password}
            onChange={handlePassword}
            placeholder="비밀번호"
            required
          />
          <Button type="submit"> 로그인 </Button>
        </form>
        <TextButton onClick={() => navigate('/signup')}>
          아직 회원이 아니신가요?
        </TextButton>
      </StyledContent>
      <Footer />
    </Container>
  );
}

export default Login;
