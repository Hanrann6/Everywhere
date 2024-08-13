import styled from 'styled-components';

const ewhaGreen = '#00462A';
const black = '#000000';
const white = '#FFFFFF';

const TextS = styled.h3`
  content: ${props => props.content || ''};
  font-size: 25px;
  text-align: center;
  color: ${props => props.color || black};
`;
export default TextS;
