import * as S from './KeywordList.style';

export const keywordText = {
  socket_YN: '콘센트',
  typing_YN: '타이핑',
  whisper_YN: '소근소근 대화',
  loud_YN: '큰소리로 대화',
  team_YN: '팀플',
  lie_YN: '누울 수 있는',
  eat_YN: '취식',
  conv_YN: '편의시설',
  cafe_YN: '식음료점',
  computer_YN: 'PC',
  reserve_YN: '공간 예약',
  seat_YN: '좌석 발급',
};

export const KeywordList = ({ facility }) => {
  const keywords = Object.keys(facility).filter(key => facility[key] === true);
  const keywordList = keywords.map(key => keywordText[key]);

  return (
    <div>
      <S.KeywordWrapper>
        {keywordList.map((keyword, index) => (
          <S.Keyword key={index}>{keyword}</S.Keyword>
        ))}
      </S.KeywordWrapper>
    </div>
  );
};
