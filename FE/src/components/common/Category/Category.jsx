import * as S from './Category.style';
import theme from '../../../styles/theme';
import { useState } from 'react';

export function Category({ name, isMainCategory }) {
  const [keywordList, setKeywordList] = useState([]);

  const onClick = () => {
    // NOTE: early return
    if (isMainCategory) return;

    // 필터 reset은 없는 건지
    // 기존 리스트 복사
    const newKeywordList = [...keywordList];
    newKeywordList.push(name);
    if (!newKeywordList.includes(name)) {
      newKeywordList.push(name);
    }

    // 상태 업데이트
    setKeywordList(newKeywordList);
  };

  return (
    <S.CategoryUlLi>
      <S.Category
        onClick={onClick}
        color={isMainCategory ? theme.black : theme.gray}
      >
        {name}
      </S.Category>
    </S.CategoryUlLi>
  );
}
