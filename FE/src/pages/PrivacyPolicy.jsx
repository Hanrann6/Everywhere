import React from 'react';
import { CloseButton } from '../components/common/CloseButton';
import * as Cont from '../components/PrivacyPolicy/Container.js';
import '../styles/TermOfUse.css';
function PrivacyPolicy() {
  return (
    <Cont.Border>
      <CloseButton />
      <Cont.Header>
        <h1 className="headerStyle">개인정보처리방침</h1>
      </Cont.Header>
      <Cont.Pragraph>
        <h1 className="clauseStyle">수집하는 개인정보의 항목</h1>
        <h3 className="contentStyle">
          Everywhere는 서비스 제공을 위해 최소한의 개인정보를 수집합니다.
          <ul>
            <li>회원가입 시 수집되는 개인정보: 학교 이메일 계정, 비밀번호 </li>
          </ul>
        </h3>
      </Cont.Pragraph>
      <Cont.Pragraph>
        <h1 className="clauseStyle">수집한 개인정보의 처리 목적 </h1>
        <h3 className="contentStyle">
          수집된 개인정보는 다음의 목적에 한해 이용됩니다.
          <ol>
            <li>
              가입 및 탈퇴 의사 확인, 회원 식별 및 관리, 재학생 및 졸업생 확인
            </li>
            <li>이용자 친화적 서비스 제공</li>
            <li>불법, 약관 위반 게시물 게시와 같은 부정행위 방지</li>
            <li>회원관리, 서비스 운영 및 유지보수를 위한 통계자료 도출</li>
          </ol>
        </h3>
      </Cont.Pragraph>
      <Cont.Pragraph>
        <h1 className="clauseStyle">개인정보의 파기</h1>
        <h3 className="contentStyle">
          <ol>
            <li>
              Everywhere는 탈퇴 및 동의 철회 등 개인정보 수집 및 이용 목적이
              달성될 경우, 지체없이 해당 개인정보를 파기합니다.
            </li>
            <li>
              개인정보를 파기할 경우, 재생이 불가능한 방법으로 파기합니다.
            </li>
          </ol>
        </h3>
      </Cont.Pragraph>
      <Cont.Pragraph>
        <h1 className="clauseStyle">정보주체의 권리, 의무 및 행사</h1>
        <h3 className="contentStyle">
          회원은 언제든지 서비스 내부에서 자신의 개인정보를 조회하거나 수정,
          삭제, 탈퇴할 수 있습니다.
        </h3>
      </Cont.Pragraph>
    </Cont.Border>
  );
}

export default PrivacyPolicy;
