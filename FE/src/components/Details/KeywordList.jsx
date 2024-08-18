import { useState, useEffect } from 'react';
import * as S from './KeywordList.style';

const API_URL = 'http://ec2-3-25-114-45.ap-southeast-2.compute.amazonaws.com';

export const keywordText = {
  //keywordMap은 자바스크립트 객체이다.
  socketYN: '콘센트',
  typingYN: '타이핑',
  whisperYN: '소근소근 대화',
  loudYN: '큰소리로 대화',
  teamYN: '팀플',
  lieYN: '누울 수 있는',
  eatYN: '취식',
  convYN: '편의시설',
  cafeYN: '식음료점',
  computerYN: 'PC',
  reserveYN: '공간 예약',
  seatYN: '좌석 발급',
};

export const KeywordList = ({ facId }) => {
  const [facility, setFacility] = useState(null);

  useEffect(() => {
    async function fetchFacility() {
      const response = await fetch(`${API_URL}/fac/${facId}`);
      const data = await response.json();
      setFacility(data);
    }

    fetchFacility();
  }, [facId]);
  //facility배열에서 value가 true인 'key'들을 추출해 새로운 배열 keywords에 저장
  const keywords = Object.keys(facility).filter(key => facility[key] === true);

  //keywords를 keywordText객체에서 찾아서 value를 새로운 배열 keywordList에 저장
  const keywordList = keywords.map(key => keywordText[key]);

  return (
    <div>
      <S.KeywordWrapper>
        {keywordList.map(key => (
          <S.Keyword key={key}>{key}</S.Keyword>
        ))}
      </S.KeywordWrapper>
    </div>
  );
};
