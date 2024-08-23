import { useEffect, useState } from 'react';
import theme from '../../../styles/theme';
import * as S from './Category.style';

export default function Category({
  name,
  isMainCategory,
  keywordList,
  handleKeywordList,
}) {
  const [checked, setChecked] = useState(false);

  // NOTE: early return 공부하기
  const handleCategory = () => {
    if (isMainCategory) return;

    // NOTE: (심화 개념) setState의 비동기 특성
    // as-is: React의 setState 함수가 비동기로 동작하기 때문에 실시간으로 반영되지 않음
    // to-be: 함수형 업데이트를 사용해 이전 상태(prevList)에 접근하고, 이를 기반으로 새 상태를 계산
    handleKeywordList(prevList => {
      const isAlreadySelected = prevList.includes(name);

      if (isAlreadySelected) {
        setChecked(false);
        return prevList.filter(keyword => keyword !== name);
      } else {
        setChecked(true);
        return [...prevList, name];
      }
    });
  };

  useEffect(() => {
    setChecked(keywordList?.includes(name));
  }, [keywordList, name]);

  return (
    <S.CategoryUlLi>
      <S.Category
        onClick={handleCategory}
        color={isMainCategory ? theme.black : theme.gray}
        className={!isMainCategory && checked ? 'active' : ''}
      >
        {name}
      </S.Category>
    </S.CategoryUlLi>
  );
}
