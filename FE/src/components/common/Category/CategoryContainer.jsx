import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';
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
  const [isClicked, setIsClicked] = useState(false); // 컴포넌트 레벨에서 상태 선언
  const navigate = useNavigate();
  const { build_id } = useParams();

  const handleKeywordList = (newKeyword) => {
    setKeywordList(newKeyword);
  };

  const handleSearch = async () => {
    setIsClicked(true); // 버튼이 클릭되었음을 표시

    // 검색 로직을 여기에서 처리합니다.
    async function logJSONData() {
      try {
        const response = await fetch('URL'); // 실제 URL로 변경하세요
        const jsonData = await response.json(); // JSON 파싱
        console.log(jsonData);
      } catch (error) {
        console.error('Error fetching JSON data:', error);
      }

      setIsClicked(false); // 데이터 로딩이 끝나면 클릭 상태 해제
    }

    await logJSONData(); // 비동기 함수 호출

    console.log('keywordList:', keywordList);
  };

  return (
    <section style={{ backgroundImage: `url(${bgImg})` }}>
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
          {isClicked && console.log('버튼이 클릭되었습니다.')}
        </S.SearchBtn>
      </div>
    </section>
  );
};

export default CategoryContainer;

