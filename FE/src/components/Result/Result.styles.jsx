import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
`;

export const ResultNumber = styled.div`
  height: 200px;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ShowText = styled.div`
  padding: 20px;
  font-size: 23px;
  font-weight: 700;
`;

export const ResultList = styled.div`
  height: auto;
  overflow: hidden;
  margin-bottom: 100px;
  padding: 20px 0;
  background-color: rgba(37, 105, 31, 0.12);
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  position: relative;
`;
