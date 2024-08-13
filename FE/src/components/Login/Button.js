import styled from 'styled-components';
const ewhaGreen = '#00462A';
const black = '#000000';
const white = '#FFFFFF';

const Button = styled.button`
  background-color: ${props => props.bgColor || ewhaGreen};
  color: ${props => props.color || white};
  border: none;
  padding: 8px 22px;
  font-size: 17px;
  border-radius: 5px;
  transition: background-color 0.1s;
  &:hover {
    background-color: white;
    color: ewhaGreen;
    border: 1px solid ewhaGreen;
  }
`;

export default Button;
