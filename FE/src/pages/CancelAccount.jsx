import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Cont from '../components/CancelAccount/Container';
import { GoBackButton } from '../components/common/CloseButton';
import { API_URL } from '../constants';

function CancelAccount() {
  const navigate = useNavigate();
  function goToHome() {
    navigate('/');
  }

  const originalCheckWord = 'Ewha is Everywhere';
  const user_id = sessionStorage.getItem('user_id');
  console.log('User ID:', user_id); //디버깅

  const [checkWord, setcheckWord] = useState('');
  const [ischeckWordMatch, setIsCheckWordMatch] = useState(true);

  const handleCheckWord = event => {
    const value = event.target.value;
    setcheckWord(value);
    setIsCheckWordMatch(originalCheckWord === value);
  };

  const handleSubmit = async event => {
    event.preventDefault();
    if (!ischeckWordMatch) {
      return;
    }

    const payload = {
      user_id: user_id,
    };

    try {
      const response = await fetch(`${API_URL}/user/delete/${user_id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        //body: JSON.stringify(payload),
      });

      const result = await response.json();
      if (!(response.status === 200)) return;
      if (result.status === 200) {
        alert('탈퇴 성공: ' + result.message);
        goToHome();
      } else if (result.status === 400) {
        alert('탈퇴 실패: ' + result.message);
      }
    } catch (error) {
      console.error('오류 발생:', error);
    }
  };

  return (
    <Cont.Border>
      <GoBackButton />
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

      <Cont.Form onSubmit={handleSubmit}>
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
        <Cont.Button type="submit">Everywhere 회원 탈퇴하기</Cont.Button>
      </Cont.Form>
    </Cont.Border>
  );
}

export default CancelAccount;
