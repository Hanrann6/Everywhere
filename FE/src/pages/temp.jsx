import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from '../components/Login/Input';
import { Button } from '../components/Login/Button';
function CancelAccount() {
  const navigate = useNavigate();

  return (
    <div>
      <div>
        <h1>회원 탈퇴</h1>
        <h3>아래의 문장을 정확히 따라 입력하세요.</h3>
        <h3>Ewha is Everywhere</h3>
      </div>
      <div>
        <form>
          <Input
            type="text"
            name="check"
            //value={checkString}
            placeholder="Ewha is Everywhere"
            autoFocus
            required
          />
          <Button>회원 탈퇴하기</Button>
        </form>
      </div>
      <div>
        <h3>
          ※ 탈퇴 즉시 회원님의 계정에 대한 모든 정보는 삭제되며, 복구할 수
          없습니다.
        </h3>
        <h3>※ 회원님께서 작성한 리뷰는 삭제되지 않습니다.</h3>
        <h3>※ 자세한 내용은 개인정보처리방침을 확인해주세요.</h3>
      </div>
    </div>
  );
}

export default CancelAccount;
