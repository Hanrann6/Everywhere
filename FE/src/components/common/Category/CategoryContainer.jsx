import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Category } from '.';
import {
  MENU_NAMES1,
  MENU_NAMES2,
  MENU_NAMES3,
  MENU_NAMES4,
  MENU_NAMES5,
} from './category.const';
import * as S from '../../../styles/home';
import bgImg from '../../../assets/home_bg.png';

const CategoryContainer = () => {
  const [keywordList, setKeywordList] = useState([]);

  const handleKeywordList = newKeyword => {
    setKeywordList(newKeyword);
  };

  const handleSearch = () => {
    // TODO: 검색 API 로직 추가
    console.log(keywordList);
  };

  return (
    <section style={{ backgroundImage: { bgImg } }}>
      <div>
        <img src="" alt="" />
        <S.H2Text>이화여자대학교 어디로 갈까요?</S.H2Text>
        <div>
          <ul style={{ paddingLeft: '0px' }}>
            <S.CategoryUlLi>
              <S.Horizontal>
                <S.HorizontalUl>
                  {MENU_NAMES1.map((menu, index) => (
                    <Category
                      key={menu}
                      name={menu}
                      isMainCategory={index === 0}
                      keywordList={keywordList}
                      handleKeywordList={handleKeywordList}
                    />
                  ))}
                </S.HorizontalUl>
              </S.Horizontal>
            </S.CategoryUlLi>
            <S.CategoryUlLi>
              <S.Horizontal>
                <S.HorizontalUl>
                  {MENU_NAMES2.map((menu, index) => (
                    <Category
                      key={menu}
                      name={menu}
                      isMainCategory={index === 0}
                      keywordList={keywordList}
                      handleKeywordList={handleKeywordList}
                    />
                  ))}
                </S.HorizontalUl>
              </S.Horizontal>
            </S.CategoryUlLi>
            <S.CategoryUlLi>
              <S.Horizontal>
                <S.HorizontalUl>
                  {MENU_NAMES3.map((menu, index) => (
                    <Category
                      key={menu}
                      name={menu}
                      isMainCategory={index === 0}
                      keywordList={keywordList}
                      handleKeywordList={handleKeywordList}
                    />
                  ))}
                </S.HorizontalUl>
              </S.Horizontal>
            </S.CategoryUlLi>
            <S.CategoryUlLi>
              <S.Horizontal>
                <S.HorizontalUl>
                  {MENU_NAMES4.map((menu, index) => (
                    <Category
                      key={menu}
                      name={menu}
                      isMainCategory={index === 0}
                      keywordList={keywordList}
                      handleKeywordList={handleKeywordList}
                    />
                  ))}
                </S.HorizontalUl>
              </S.Horizontal>
            </S.CategoryUlLi>
            <S.CategoryUlLi>
              <S.Horizontal>
                <S.HorizontalUl>
                  {MENU_NAMES5.map((menu, index) => (
                    <Category
                      key={menu}
                      name={menu}
                      isMainCategory={index === 0}
                      keywordList={keywordList}
                      handleKeywordList={handleKeywordList}
                    />
                  ))}
                </S.HorizontalUl>
              </S.Horizontal>
            </S.CategoryUlLi>
          </ul>
        </div>
        <S.SearchBtn onClick={handleSearch}>
          검색하기 <FontAwesomeIcon icon={faMagnifyingGlass} />
        </S.SearchBtn>
      </div>
    </section>
  );
};

export default CategoryContainer;
