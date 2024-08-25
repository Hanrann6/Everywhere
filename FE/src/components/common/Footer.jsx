import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import theme from '../../styles/theme.js';

const StyledFooter = styled.div`
  width: 500px;
  height: 18px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 0 auto;
  padding: 20px 0;
  position: relative;
  margin-top: 115px;
`;

const Option = styled.button`
  background-color: #ffffff;
  border: none;
  font-size: 15px;
  cursor: pointer;
`;

export const Footer = () => {
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
