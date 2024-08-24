import * as S from './Result.styles';
import { ResultBox } from './ResultBox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons';

export const Result = ({ results }) => {
  // results가 null 또는 undefined인 경우, 빈 배열로 대체
  const safeResults = results || [];
  console.log('Result.jsx 진입');
  console.log('Results:', safeResults); // 수정된 부분

  // 데이터 구조를 확인하기 위해 추가적인 콘솔 로그
  safeResults.forEach((result, index) => {
    console.log(`Result ${index}:`, result);
  });

  return (
    <S.Wrapper>
      <S.ResultNumber>
        <FontAwesomeIcon
          icon={faAnglesDown}
          size="2xl"
          style={{ color: '#00462A' }}
        />
        <S.ShowText>총 {safeResults.length}건의 검색 결과 </S.ShowText>
      </S.ResultNumber>

      <S.ResultList>
        {safeResults.map(facility => (
          <div key={facility.fac_id}>
            <ResultBox facility={facility} />  {/* 올바른 props 전달 */}
          </div>
        ))}
      </S.ResultList>
    </S.Wrapper>
  );
};

