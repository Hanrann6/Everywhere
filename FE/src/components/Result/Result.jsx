import * as S from './Result.styles';
import { ResultBox } from './ResultBox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons';

export function Result({ results }) {
  return (
    <S.Wrapper>
      <S.ResultNumber>
        <FontAwesomeIcon
          icon={faAnglesDown}
          size="2xl"
          style={{ color: '#00462A' }}
        />
        <S.ShowText>총 {results.length}건의 검색 결과</S.ShowText>
      </S.ResultNumber>

      <S.ResultList>
        {results.map(facility => (
          <ResultBox key={facility.id} facility={facility} />
        ))}
      </S.ResultList>
    </S.Wrapper>
  );
}
