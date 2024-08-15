import styled from 'styled-components';

const ewhaGreen = '#00462A';
const black = '#000000';
const white = '#FFFFFF';

const TextL = styled.h1`
  message: ${props => props.message || ''};
  font-size: 35px;
  text-align: center;
  color: ${props => props.color || black};
`;
export default TextL;
