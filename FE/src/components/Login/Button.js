import styled from 'styled-components';
import theme from '../../styles/theme.js';

export const Button = styled.button`
  background-color: ${props => props.bgColor || theme.ewhaGreen};
  color: ${props => props.color || theme.white};
  border: none;
  margin: 8px;
  font-size: 17px;
  font-weight: 500;
  width: 408px;
  height: 60px;
  border-radius: 5px;
  transition: background-color 0.1s;
  cursor: pointer;
  &:hover {
    background-color: ${props => props.bgColor || theme.subGreen};
  }
`;

export const TextButton = styled.button`
  background-color: #ffffff;
  background-color: rgba(250, 250, 250, 0);
  border: none;
  margin: 30px;
  text-align: center;
  font-size: 17px;
  text-decoration-line: underline;
  cursor: pointer;
`;
