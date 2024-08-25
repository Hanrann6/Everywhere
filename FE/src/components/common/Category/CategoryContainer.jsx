import { useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Category } from '.';
import { buildingId } from '../buildingIdData.js';
import { keywordData } from '../keywordData.js';
import {
  MENU_NAMES1,
  MENU_NAMES2,
  MENU_NAMES3,
  MENU_NAMES4,
  MENU_NAMES5,
} from './category.const';
import * as S from '../../../styles/home';
import bgImg from '../../../assets/home_bg.png';
import { API_URL } from '../../../constants/index.js';
import { Result } from '../../Result/Result';
import { Footer } from '../Footer';
// const [showResults, setShowResults] = useState(false);
const CategoryContainer = () => {
  const [keywordList, setKeywordList] = useState([]);
  const [isClicked, setIsClicked] = useState(false);
  const [facility, setFacility] = useState(null);
  const [showResults, setShowResults] = useState(false); // 훅 선언을 함수 내부로 이동



  const navigate = useNavigate();
  const { facId } = useParams();
  const [searchResults, setSearchResults] = useState([]);

  const handleKeywordList = newKeyword => {
    setKeywordList(newKeyword);
  };

  const handleSearch = async () => {
    setIsClicked(true); // 버튼이 클릭되었음을 표시

    // buildingId 객체를 가져오기
    const buildingIdMap = buildingId[0];
    const keywordMap = keywordData[0];

    // keywordList를 facID와 그 외의 것들로 분리
    const facIDList = keywordList
      .map(kw => buildingIdMap[kw]) // buildingIdMap에서 값 가져오기
      .filter(Boolean); // `undefined` 또는 `null`을 제거

    const nonFacIDList = keywordList
      .map(kw2 => (keywordMap[kw2] ? `${keywordMap[kw2]}=true` : null)) // `undefined` 대신 `null` 사용
      .filter(Boolean); // `null`과 `undefined`를 필터링

    console.log('FacID List:', facIDList);
    console.log('Keywords List:', nonFacIDList);

    // API URL 형성
    const apiUrl = `${API_URL}/fac?buildId=${facIDList.join('&buildId=')}&${nonFacIDList.join('&')}`;
    console.log(apiUrl);

    // 비동기 API 호출
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const results = await response.json();
      setSearchResults(results);
      setShowResults(true);
    } catch (error) {
      console.error('Error fetching JSON data:', error);
    }
    setIsClicked(false); // 데이터 로딩이 끝나면 클릭 상태 해제
  };

  return (
    <section style={{ 
      backgroundImage: `url(${bgImg})`,
      width: "100%",
      height: "700px"}}>
      <div>
        <img src="" alt=""/>
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
        <S.SearchBtn onClick={handleSearch} style={S.SearchBtn.SearchBtn}>
          검색하기 <FontAwesomeIcon icon={faMagnifyingGlass} />
        </S.SearchBtn>
        {showResults && <Result results={searchResults} />}
      </div>
      <Footer /> 
    </section>
  );
};

export default CategoryContainer;
