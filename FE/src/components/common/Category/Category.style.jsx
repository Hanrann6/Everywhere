import styled from 'styled-components';

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

  &:hover,
  &:active {
    background-color:#25691F;
  }
`;
