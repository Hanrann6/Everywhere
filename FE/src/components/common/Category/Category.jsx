import { useEffect, useState } from 'react';
import theme from '../../../styles/theme';
import * as S from './Category.style';
import { MENU_NAMES1 } from './category.const.js';

export default function Category({
  name,
  isMainCategory,
  keywordList,
  handleKeywordList,
}) {
  const [checked, setChecked] = useState(false);

  // NOTE: early return 공부하기

  //사용자가 카테고리르 클릭했을 때 실행
  const handleCategory = () => {
    if (isMainCategory) return; // MainCategory(index=0인 애들)면 아무 것도 동작하지 않음

    // NOTE: (심화 개념) setState의 비동기 특성
    // as-is: React의 setState 함수가 비동기로 동작하기 때문에 실시간으로 반영되지 않음
    // to-be: 함수형 업데이트를 사용해 이전 상태(prevList)에 접근하고, 이를 기반으로 새 상태를 계산
    handleKeywordList(prevList => {
      const isAlreadySelected = prevList.includes(name); // Bool
      if (name === '전체') {
        if (isAlreadySelected) {
          // '전체'가 선택된 상태라면, 전체 건물을 선택 해제
          setChecked(false);
          // 모든 MENU_NAMES1 요소를 prevList에서 제거
          return prevList.filter(keyword => !MENU_NAMES1.includes(keyword));
        } else {
          // '전체'가 선택되지 않은 상태라면, 전체 건물을 선택
          setChecked(true);
          // prevList에 MENU_NAMES1 요소들을 추가
          const newList = [...prevList];
          MENU_NAMES1.forEach(buildingName => {
            if (!newList.includes(buildingName)) {
              newList.push(buildingName);
            }
          });
          return newList;
        }
      } else {
        if (isAlreadySelected) {
          setChecked(false);
          return prevList.filter(keyword => keyword !== name);
        } else {
          setChecked(true);
          return [...prevList, name];
        }
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
