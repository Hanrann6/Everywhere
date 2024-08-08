import React from "react";
import styled from "styled-components";

const Keyword = styled.span`
  margin-right: 10px;
  margin-top: 0;
  padding: 8px 12px;
  height: 20px;
  background-color: #25691f;
  color: white;
  border-radius: 18px;
  font-size: 12px;
  font-weight: 600;
  text-align: center;
  display: flex;
  align-items: center;
`;

const Wrapper = styled.div`
  padding-left: 30px;
  display: flex;
  justify-content: left;
`;

function KeywordList() {
  return (
    <Wrapper>
      <Keyword>콘센트</Keyword>
      <Keyword>큰 소리로 대화</Keyword>
      <Keyword>소근소근 대화</Keyword>
    </Wrapper>
  );
}

export default KeywordList;
