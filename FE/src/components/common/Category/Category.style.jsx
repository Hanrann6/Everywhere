import styled from 'styled-components';

export const CategoryUlLi = styled.li`
  list-style: none;
  justify-content: center;
  padding: 3px;
  margin: 3px 0;
`;

export const Category = styled.button`
  background-color: ${props => props.color};
  color: #ffffff;
  border: none;
  border-radius: 12px;
  padding: 7px 15px;
`;
