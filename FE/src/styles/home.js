import styled from 'styled-components';

export const Root = styled.div`
  /* .class {} */
`;

export const categoryUl = styled.ul`
  margin-top: 160px;
  text-align: center;
  margin-bottom: 30px;
  padding-left: 0px;
`;

export const Category = styled.button`
  background-color: #979797;
  color: #ffffff;
  border: none;
  border-radius: 20px;
  padding: 30px;
`;

export const H2Text = styled.h2`
  position: stickey;
  margin-top: 125px;
  margin-bottom: 30px;
  text-align: center;
  width: 100%;
  top: 30px;
  color: #000000;
`;

export const Horizontal = styled.div`
  display: flex;
  justify-content: left;
`;

export const HorizontalUl = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding-left: 0;
  padding-inline-start: 17%;
`;

export const CategoryUlLi = styled.li`
  list-style: none;
  justify-content: center;
  padding: 3px;
  margin: 3px 0;
`;

export const SearchBtn = styled.button`
  background-color: ${({ theme }) => theme.ewhaGreen};
  color: #ffffff;
  border: none;
  border-radius: 16px;
  padding: 15px 25px;
  font-size: 16px;
  font-weight: bold;
  position: relative;
  top: 0px;
  left: 50%;
  transform: translateX(-50%); /*왼쪽으로 요소의 50% 너비만큼 이동*/
  cursor: pointer;
  margin-bottom: 40px;

  &:hover {
    background-color: ${({ theme }) => theme.subGreen};
  }
`;

export const GreenBG = styled.div`
  background-color: #e5ede4;
  color: white;
  width: 50px;
  height: 60px;
  padding: 50px;
`;
