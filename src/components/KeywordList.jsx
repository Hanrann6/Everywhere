import React from "react";
import styled from "styled-components";
import data from "../data.json";

const Keyword = styled.div`
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
  display: inline-flex;
  align-items: center;
  white-space: nowrap;
`;

const KeywordWrapper = styled.div`
  padding-left: 30px;
  display: flex;
  justify-content: left;
`;

const keywordText = {
  //keywordMap은 자바스크립트 객체이다.
  socketYN: "콘센트",
  typingYN: "타이핑",
  whispherYN: "소근소근 대화",
  loudYN: "큰소리로 대화",
  teamYN: "팀플",
  lieYN: "누울 수 있는",
  eatYN: "취식",
  convYN: "편의시설",
  cafeYN: "식음료점",
  computerYN: "PC",
  reserveYN: "공간 예약",
  seatYN: "좌석 발급",
};

function KeywordList({ facId }) {
  //json파일의 facility 중 facId가 props로 받은 값과 같은 객체를 뽑아 새로운 facility 배열에 저장
  const facility = data.facility.find((fac) => fac.facId === facId);

  //facility배열에서 value가 true인 'key'들을 추출해 새로운 배열 keywords에 저장
  const keywords = Object.keys(facility).filter(
    (key) => facility[key] === true
  );

  //keywords를 keywordText객체에서 찾아서 value를 새로운 배열 keywordList에 저장
  const keywordList = keywords.map((key) => keywordText[key]);

  return (
    <div>
      <KeywordWrapper>
        {keywordList.map((key) => (
          <Keyword>{key}</Keyword>
        ))}
      </KeywordWrapper>
    </div>
  );
}

export default KeywordList;
