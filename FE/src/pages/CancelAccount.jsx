import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Cont from '../components/CancelAccount/Container';

//TODO: Input 위로 올리기

function CancelAccount() {
  const navigate = useNavigate();
  function goToHome() {
    navigate('/');
  }
  const api =
    'ec2-3-25-114-45.ap-southeast-2.compute.amazonaws.com//user/delete/{userId}'; //이게 맞나요?
  const originalCheckWord = 'Ewha is Everywhere';

  const [checkWord, setcheckWord] = useState('');
  const [ischeckWordMatch, setIsCheckWordMatch] = useState(true);

  const handleCheckWord = event => {
    const value = event.target.value;
    setcheckWord(value);
    setIsCheckWordMatch(originalCheckWord === value);
  };

  const handleCancelAccount = async event => {
    event.preventDefault();
    if (!ischeckWordMatch) {
      return;
    }

    const payload = {
      userId: sessionStorage.getItem('email'),
    };

    try {
      const response = await fetch(api, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (response.status === 200) {
        alert('탈퇴 성공');
        goToHome();
      } else if (response.status === 400) {
        alert('탈퇴 실패');
      }
    } catch (error) {
      console.error('오류 발생:', error);
    }
  };

  return (
    <Cont.Border>
      <Cont.Header>
        <h1
          style={{
            fontSize: '35px',
            fontWeight: '700',
            textAlign: 'center',
          }}
        >
          회원 탈퇴
        </h1>
      </Cont.Header>

      <Cont.Pragraph>
        <h3
          style={{
            fontSize: '17px',
            fontWeight: '600',
            textAlign: 'center',
          }}
        >
          아래의 문장을 대소문자와 띄어쓰기를 정확히 지켜서 입력하세요.
        </h3>
        <h4
          style={{
            fontSize: '20px',
            fontWeight: '500',
            textAlign: 'center',
          }}
        >
          Ewha is Everywhere
        </h4>
      </Cont.Pragraph>

      <Cont.Form>
        <Cont.Input
          type="text"
          name="checkWord"
          value={checkWord}
          onChange={handleCheckWord}
          placeholder="Ewha is Everywhere"
          autoFocus
          required
        />
        {!ischeckWordMatch && (
          <div className="failure-message" style={{ color: 'red' }}>
            문장이 정확히 일치하는지 다시 확인해주세요
          </div>
        )}

        <Cont.Warn>
          <h3
            style={{
              fontSize: '15px',
              fontWeight: '400',
              color: 'gray',
            }}
          >
            ※ 탈퇴 즉시 회원님의 계정에 대한 모든 정보는 삭제되며, 복구할 수
            없습니다.
          </h3>
          <h3
            style={{
              fontSize: '15px',
              fontWeight: '400',
              color: 'gray',
            }}
          >
            ※ 회원님께서 작성한 리뷰는 삭제되지 않습니다.
          </h3>
          <h3
            style={{
              fontSize: '15px',
              fontWeight: '400',
              color: 'gray',
            }}
          >
            ※ 자세한 내용은 개인정보처리방침을 확인해주세요.
          </h3>
        </Cont.Warn>
        <Cont.Button onClick={handleCancelAccount}>
          Everywhere 회원 탈퇴하기
        </Cont.Button>
      </Cont.Form>
    </Cont.Border>
  );
}

export default CancelAccount;
