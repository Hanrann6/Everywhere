import styled from 'styled-components';
import theme from '../../styles/theme.js';

export const Button = styled.button`
  background-color: ${props => props.bgColor || theme.ewhaGreen};
  color: ${props => props.color || theme.backGround};
  border: none;
  padding: 8px 22px;
  font-size: 17px;
  border-radius: 5px;
  transition: background-color 0.1s;
  &:hover {
    background-color: ${props => props.bgColor || theme.backGround};
    color: ${props => props.color || theme.ewhaGreen};
    border: 1px solid #ffffff; //#FFFFFF를 theme에서 접근하는 법?
  }
`;

export const TextButton = styled.button`
  background-color: none;
  border: none;
  margin: 30px;
  font-size: 17px;
  text-decoration-line: underline;
`;
