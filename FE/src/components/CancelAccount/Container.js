import styled from 'styled-components';
import theme from '../../styles/theme.js';

export const Border = styled.div`
  width: 562px;
  margin: 232.5px 439px;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: baseline;
`;

export const Header = styled.header`
  flex-basis: 562px;
  align-self: center;
`;

export const Pragraph = styled.div`
  width: 562px;
  align-self: flex-start;
  margin: 75px 53px 40px 53px;
`;
export const Form = styled.form`
  width: 562px;
  align-self: flex-start;
`;
export const Input = styled.input`
  width: 562px;
  height: 37px;
  border-radius: 5px;
  align-self: flex-start;
`;

export const Warn = styled.div`
  width: 562px;
  height: 70px;
  margin: 59px 186px 95px 4px;
`;

export const Button = styled.button`
  margin: 0px 81px;
  background-color: ${props => props.bgColor || theme.ewhaGreen};
  color: ${props => props.color || theme.white};
  border: none;

  font-size: 17px;
  font-weight: 500;
  width: 408px;
  height: 60px;
  border-radius: 5px;
  transition: background-color 0.1s;
  &:hover {
    background-color: ${props => props.bgColor || theme.backGround};
    color: ${props => props.color || theme.ewhaGreen};
    border: 1px solid #ffffff; //#FFFFFF를 theme에서 접근하는 법?
  }
`;
