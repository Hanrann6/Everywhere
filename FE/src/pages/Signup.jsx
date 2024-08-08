import React, { useState } from 'react';

function SignUp() {
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
  const duplicateCheck = () => {
    const userEmail = userEmailId + userEmailDomain;
    console.log('중복검사:', userEmail);
    //중복검사 로직
  };
  const validateCheck = () => {
    //유효성 검사 로직
  };
  const onClickSignup = event => {
    event.preventDefault();
    console.log('회원가입:', { userEmailId, userEmailDomain, userPW });
    // 회원가입 로직
  };

  return (
    <div>
      <div> 회원가입 </div>
      <form method="post" action="서버 url">
        <label>
          {' '}
          이용약관
          <div style="overflow-y:auto; width:500px; height:150px;">
            <p>
              {' '}
              국무회의는 정부의 권한에 속하는 중요한 정책을 심의한다. 대한민국의
              주권은 국민에게 있고, 모든 권력은 국민으로부터 나온다. 사법권은
              법관으로 구성된 법원에 속한다. 국회는 의장 1인과 부의장 2인을
              선출한다. 국가는 평생교육을 진흥하여야 한다. 선거에 있어서
              최고득표자가 2인 이상인 때에는 국회의 재적의원 과반수가 출석한
              공개회의에서 다수표를 얻은 자를 당선자로 한다.
            </p>
          </div>
          <input type="checkbox" value="y" required>
            {' '}
            동의합니다.{' '}
          </input>
        </label>
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
          <button onClick={duplicateCheck}> 중복 확인 </button>
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
          {validateCheck(userPW)}
        </label>

        <button onClick={onClickSignup}> 회원가입 </button>
      </form>
    </div>
  );
}
export default SignUp;
