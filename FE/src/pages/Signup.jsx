import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Login/Button';
import TextL from '../components/Login/TextL';
import TextM from '../components/Login/TextM';
import TextS from '../components/Login/TextS';

function SignUp() {
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
      return <TextS content="비밀번호가 일치하지 않습니다." />;
    }
  };

  const handleSignup = async event => {
    event.preventDefault();
    const payload = {
      email: userEmail,
      password: userPW,
      //date:
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
    <div>
      <TextL content="회원가입" />
      <form method="post" action="/user/create">
        <label>
          <TextM content="이용약관" />
          <div style="overflow-y:auto; width:500px; height:150px;">
            <TextS
              content=" 무회의는 정부의 권한에 속하는 중요한 정책을 심의한다. 대한민국의
              주권은 국민에게 있고, 모든 권력은 국민으로부터 나온다. 사법권은
              법관으로 구성된 법원에 속한다. 국회는 의장 1인과 부의장 2인을
              선출한다. 국가는 평생교육을 진흥하여야 한다. 선거에 있어서
              최고득표자가 2인 이상인 때에는 국회의 재적의원 과반수가국 출석한
              공개회의에서 다수표를 얻은 자를 당선자로 한다."
            />
          </div>
          <input type="checkbox" value="y" required>
            동의합니다.
          </input>
        </label>
        <label>
          <TextM content="이메일" />
          <input
            type="email"
            name="userEmail"
            value={userEmail}
            onChange={handleUserEmail}
            placeholder="이메일을 입력하세요"
            autoFocus
            required
          />
          {/*<Button onClick={duplicateCheck}> 중복 확인 </Button>*/}
        </label>
        <label>
          <TextM content="비밀번호" />
          <input
            type="password"
            name="userPassword"
            value={userPW}
            onChange={handleUserPW}
            placeholder="영문과 숫자를 포함한 8자 이상의 비밀번호를 입력하세요"
            required
          />
        </label>
        <Button onClick={handleSignup}> 회원가입 </Button>
      </form>
    </div>
  );
}
export default SignUp;
