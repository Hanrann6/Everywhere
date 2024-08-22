import styled from 'styled-components';
import theme from '../../../styles/theme';

export const CategoryUlLi = styled.li`
  list-style: none;
  justify-content: left;
  padding: 3px;
  margin: 3px 0;
`;

export const Category = styled.button`
  background-color: ${props => props.color};
  font-size: 15px;
  color: #ffffff;
  border: none;
  border-radius: 20px;
  padding: 10px 18px;
  white-space: nowrap;
  font-weight: bold;
  margin-right: 3px;
  cursor: ${props => (props.color === theme.black ? undefined : 'pointer')};

  &:hover {
    background-color: ${props =>
      props.color === theme.black ? undefined : theme.ewhaGreen};
  }

  &.active {
    background-color: ${({ theme }) => theme.subGreen};
  }
`;
