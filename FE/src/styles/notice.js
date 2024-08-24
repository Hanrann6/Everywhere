import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const Header = styled.div`
  margin: 100px auto;
  width: 730px;

  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const Button = styled.div`
  margin-right: auto;
`;

export const Title = styled.div`
  position: absolute;
  font-size: 25px;
  font-weight: 700;
`;
export const List = styled.div`
  width: 730px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
`;
export const Notice = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 0;
  text-align: left;
  font-size: 14px;
  border-bottom: 1px solid #979797;
`;

export const Text = styled.div`
  margin: 0;
  cursor: pointer;
  &:hover {
    color: #00462a;
  }
`;

export const FooterWrapper = styled.footer`
  margin-top: auto;
  margin-bottom: 60px;
`;
