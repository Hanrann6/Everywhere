import * as S from './Category.style';
import theme from '../../../styles/theme';
import React, { useState } from 'react';

export function Category({ name, color }) {
  const [keywordList, setKeywordList] = useState([]);
  const onClick = () => {
    // 기존 리스트 복사
    const newKeywordList = [...keywordList];

    // 색상에 따라 리스트에 추가
    if (color === theme.gray) {
      newKeywordList.push(name);
    } else {
      // TODO 중복 검색 가능한지, 전체 클릭 가능한지 확인 후 작업
      // 질문: 어떻게 category 한 줄을 추가할 수 있는지
      // 필터 reset은 없는 건지
      if (!newKeywordList.includes(name)) {
        newKeywordList.push(name);
      }
    }

    // 상태 업데이트
    setKeywordList(newKeywordList);
    console.log(newKeywordList);
  };

  return (
    <S.CategoryUlLi>
      <S.Category onClick={onClick} color={color || theme.gray}>
        {name}
      </S.Category>
    </S.CategoryUlLi>
  );
}
