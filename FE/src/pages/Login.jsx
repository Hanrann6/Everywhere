import React, { useState } from 'react';

function Login() {
  //const [error, setError] = useState("");
  const [userEmailId, setUserEmailId] = useState('');
  const [userEmailDomain, setUserEmailDomain] = useState('');
  const [userPW, setUserPW] = useState('');

  const handleUserEmailId = event => {
    setUserEmailId(event.target.value);
  };
  const handleUserEmailDomain = event => {
    setUserEmailDomain(event.target.value);
  };
  const handleUserPW = event => {
    setUserPW(event.target.value);
  };
  const onClickLogin = event => {
    event.preventDefault();
    const userEmail = userEmailId + userEmailDomain;
    console.log('로그인:', { userEmail, userPW });

    //로그인 로직 설정
  };

  return (
    <div>
      <div> 로그인 </div>
      <form method="post" action="서버 url">
        <label>
          {' '}
          이메일
          <input
            type="text"
            name="userEmailId"
            value={userEmailId}
            onChange={handleUserEmailId}
            placeholder="이메일을 입력하세요"
            autoFocus
            required
          />
          <select
            name="userEmailDomain"
            value={userEmailDomain}
            onChange={handleUserEmailDomain}
            required
          >
            <option value="" disabled>
              --이메일 도메인을 선택하세요--
            </option>
            <option value="@ewhain.net">ewhain.net</option>
            <option value="@ewha.ac.kr">ewha.ac.kr</option>
          </select>
        </label>

        <label>
          {' '}
          비밀번호
          <input
            type="password"
            name="userPassword"
            value={userPW}
            onChange={handleUserPW}
            placeholder="비밀번호를 입력하세요"
            required
          />
        </label>

        <button onClick={onClickLogin}> 로그인 </button>
      </form>
    </div>
  );
}

export default Login;
