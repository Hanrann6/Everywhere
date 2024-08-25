import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Body = styled.div`
  position: relative;
  top: 90px;
  margin: 0 auto;
`;

export const Header = styled.div`
  width: 100%;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;
export const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
`;

export const FacName = styled.div`
  padding: 10px;
  border-radius: 20px;
  background-color: #7e7b7b;
  color: white;
  font-size: 13px;
  font-weight: 600;
  margin-left: auto;
`;

export const Textbox = styled.textarea`
  width: 530px;
  height: 100px;
  margin-bottom: 17px;
  padding: 20px;
  background-color: rgba(240, 240, 240);
  border: none;
  border-radius: 20px;
  outline: none;
  resize: none;
  font-family: 'Noto Sans KR', sans-serif;

  &::placeholder {
    color: #7e7b7b;
    text-align: left;
    font-family: 'Noto Sans KR', sans-serif;
  }
`;

export const Choosebox = styled.div`
  border-top: 1px solid #979797;
  padding-top: 23px;
  display: flex;
  flex-direction: column;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  margin-bottom: 25px;
`;

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
  height: 36px;
  background-color: white;
  color: black;
  border-radius: 17px;
  border: 1px solid black;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  margin-right: 8px;

  &:hover,
  &.active {
    background-color: rgba(240, 240, 240);
  }
`;

export const Question = styled.div`
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 10px;
`;
export const Footer = styled.div`
  margin: 20px auto;
  display: flex;
  justify-content: center;
`;

export const Text = styled.div`
  font-size: 13px;
  color: #7e7b7b;
`;
