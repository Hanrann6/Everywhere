import styled from 'styled-components';

export const StyledButton = styled.button`
  padding: 8px;
  margin: 4px;
  width: 130px;
  height: 50px;
  color: white;
  background-color: #00462a;
  border-radius: 17px;
  border: none;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.5);
  font-size: 15px;
  font-weight: 600;
`;

export const Button = ({ title, onClick }) => {
  return <StyledButton onClick={onClick}>{title}</StyledButton>;
};
