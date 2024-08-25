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
  margin-top: 120px;
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
  transform: translateX(-50%); /* 요소의 수평 중심으로 이동 */
  cursor: pointer;
  margin-bottom: 100px;
  transition: transform 0.3s linear;
  transform-origin: center; /* 변환의 중심을 요소의 중앙으로 설정 */

  &:hover {
    transform: translateX(-50%) scale(1.1); /* 수평 이동 후 확대 */
  }
`;

export const GreenBG = styled.div`
  background-color: #e5ede4;
  color: white;
  width: 50px;
  height: 60px;
  padding: 50px;
`;
