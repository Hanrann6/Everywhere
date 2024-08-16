import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const StyledFooter = styled.div`
  width: 334;
  height: 18;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
`;

const Option = styled.button`
  background-color: #ffffff;
  border: none;
  font-size: 15px;
`;

export function Footer() {
  const navigate = useNavigate();

  return (
    <StyledFooter>
      <Option onClick={() => navigate('/termofuse')}>이용약관</Option>
      <Option onClick={() => navigate('/privacypolicy')}>
        개인정보처리방침
      </Option>
      <Option onClick={() => navigate('/cancelaccount')}>회원탈퇴</Option>
    </StyledFooter>
  );
}
