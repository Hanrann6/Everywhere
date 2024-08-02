import React, { useState } from 'react';
//1.회원가입 성공 2. 회원가입 실패 
function SignUp(){
    return(
      <div>
        <label>
          <h4>이메일</h4>
          <input type="text" name="userEmailId"  placeholder="E-mail" required></input>
       </label>
        <h5>@</h5>
        <select name="userEmailDomain" required>
          <option value="@ewhain.net">ewhain.net</option>
          <option value="@ewha.ac.kr">ewha.ac.kr</option>
        </select>
     </div>
    )
  
  }