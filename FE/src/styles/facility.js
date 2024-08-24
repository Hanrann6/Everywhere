import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
`;

export const Header = styled.div`
  margin-top: 120px;
  margin-bottom: 25px;
  width: 100%;
  height: 70px;
  text-align: left;
  font-size: 23px;
  font-weight: 600;
  display: flex;
  align-items: center;
`;

export const GobackWrapper = styled.div`
  margin-left: 100px;
`;

export const Text = styled.div`
  margin-left: 20px;
`;

export const ContentBox = styled.div`
  width: 100%;
  min-width: 900px;
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

export const GoReview = styled.div`
  position: absolute;
  bottom: 25px;
  left: 30px;
  right: 30px;
  display: flex;
  justify-content: space-between;
`;
