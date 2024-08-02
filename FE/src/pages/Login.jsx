import React, { useState } from 'react';


 //0. 로그인 화면 1. 로그인 성공 2. 로그인 실패  3. 이메일/비밀번호 찾기 4. 회원가입 버튼

function LogIn(props){
  const [isLogIn, setIsLogIn] = useState(false);
  const [userEmailId, setUserEmailId] = useState("");
  const [userEmailDomain, setUserEmailDomain] = useState("@ewhain.net");
  const [userPW, setUserPW] = useState("");
  
  const handleUserEmailId = event => {
    setUserEmailId(event.target.value);
  };
  const handleUserEmailDomain = event => {
    setUserEmailDomain(event.target.value);
  };
  const handleUserPW = event => {
    setUserPW(event.target.value);
  };
  const onClinckLogIn = (event) => {
    event.preventDefault(); 
    const userEmail = userEmailId + userEmailDomain;
    }

    //1. 로그인 성공 2. 로그인 실패 
  return (
    <div>
    <h2>로그인</h2>
    <form method="post" action="서버 url/html 링크" >
      <label>
        <h4>이메일</h4>
        <input type="text" name="userEmailId"  placeholder="Email" required></input>
      </label>
      <h5>@</h5>
      <select name="userEmailDomain" required>
        <option value="@ewhain.net">ewhain.net</option>
        <option value="@ewha.ac.kr">ewha.ac.kr</option>
      </select>
      {/*서버로 userEmailId+userEmailDomain 전송하는 법?*/}

      <label>
      <h4>비밀번호</h4>
      <input type="password" name="userPassword"  placeholder="Password" required></input>
      </label>
      <input type="submit" value="로그인"></input>
    </form>
  </div>
  )
}

function ForgetEmail(){

}
function ForgetPassword(){

}