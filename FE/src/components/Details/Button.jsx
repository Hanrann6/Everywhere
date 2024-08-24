import styled from 'styled-components';

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 18px;
  height: 50px;
  color: white;
  background-color: #00462a;
  border-radius: 17px;
  border: none;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.5);
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    background-color: #25691f;
  }
`;

export const Button = ({ title, onClick }) => {
  return <StyledButton onClick={onClick}>{title}</StyledButton>;
};
