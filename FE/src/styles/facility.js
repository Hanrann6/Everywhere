import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
`;

export const Header = styled.div`
  margin: 0;
  padding: 40px 20px 0 40px;
  width: 100%;
  height: 70px;
  text-align: left;
  font-size: 20px;
  font-weight: 600;
`;

export const ContentBox = styled.div`
  min-width: 1500px;
  height: 450px;
  background-color: rgb(134, 179, 130, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const TextBox = styled.div`
  margin: 20px;
  padding: 5px;
  width: 475px;
  height: 340px;
  background-color: rgb(37, 105, 31, 0.12);
  position: relative;
`;

export const GoBack = styled.button`
  margin: 5px;
  padding: 5px;
  background: none;
  border: none;
`;

export const GoReview = styled.div`
  position: absolute;
  bottom: 20px;
  left: 30px;
  right: 30px;
  display: flex;
  justify-content: space-between;
`;
