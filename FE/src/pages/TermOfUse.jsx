import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/TermOfUse.css';
import { CloseButton } from '../components/common/CloseButton';

function TermOfUse() {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <CloseButton />
      </div>
      <header>
        <h1 className="headerStyle">이용약관</h1>
      </header>
      <div>
        <h1 className="clauseStyle">제 1조(목적)</h1>
        <h3 className="contentStyle">
          Everywhere가 제공하는 서비스 및 서비스 이용과 관련하여 Everywhere와
          이용자 간의 권리, 의무, 책임 사항 등을 규정함을 목적으로 합니다.
        </h3>
      </div>
      <div>
        <h1 className="clauseStyle">제 2조(서비스의 제공)</h1>
        <h3 className="contentStyle">
          <ol>
            <li>Everywhere는 다음 서비스를 제공합니다.</li>
            <ul>
              <li>학교 건물별 시설 정보 안내 서비스</li>
              <li>학교 시설 리뷰 제공 서비스</li>
              <li>학교 시설별 상세 정보 제공 서비스</li>
              <li>학교 시설 최신 정보 제공 서비스</li>
            </ul>
            <li>
              Everywhere는 학교 이메일 계정을 통해 학부 재학생 및 졸업생으로
              인증받은 이용자에 한해 서비스를 제공합니다. 학교 인증을 받지 않은
              이용자 및 불특정 다수의 일반 이용자는 대부분의 기능에 접근할 수
              없습니다.
            </li>
            <li>
              Everywhere는 운영상, 기술상의 필요에 따라 제공하고 있는 서비스를
              변경할 수 있습니다.
            </li>
            <li>
              Everywhere는 인터넷 장애 등의 사유로 인해 일시적으로 서비스 제공이
              어려울 경우, 통보 없이 일시적으로 서비스 제공을 중단할 수
              있습니다.
            </li>
          </ol>
        </h3>
        <h1 className="clauseStyle">(서비스 이용계약의 종료)</h1>
        <h3 className="contentStyle">
          <ol>
            <li>
              회원은 언제든지 본인의 계정으로 로그인한 뒤, 페이지 하단의
              ‘회원탈퇴’ 버튼을 누르는 방법으로 탈퇴를 요청할 수 있으며, 그 외
              문의 창구 등을 통한 탈퇴 요청은 처리되지 않습니다. Everywhere는
              해당 요청을 확인한 후 탈퇴를 처리합니다.
            </li>
            <li>
              탈퇴 처리가 완료되었더라도, 회원이 게시한 리뷰는 삭제되지
              않습니다.
            </li>
          </ol>
        </h3>
      </div>
    </div>
  );
}

export default TermOfUse;
