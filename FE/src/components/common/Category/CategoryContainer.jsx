import { useState, useEffect } from 'react';
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

const CategoryContainer = () => {
  const [keywordList, setKeywordList] = useState([]);
  const [isClicked, setIsClicked] = useState(false);
  const [facility, setFacility] = useState(null);
  const navigate = useNavigate();
  const { facId } = useParams();

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
    .map(kw2 => keywordMap[kw2] ? `${keywordMap[kw2]}=true` : null)  // `undefined` 대신 `null` 사용
    .filter(Boolean);  // `null`과 `undefined`를 필터링
    

    console.log('FacID List:', facIDList);
    console.log('Keywords List:', nonFacIDList);

    // API URL 형성
    const apiUrl = `${API_URL}/fac?buildingId=${facIDList.join('&buildingId=')}&${nonFacIDList.join('&')}`;
    console.log(apiUrl);
    // 비동기 API 호출
    try {
      const response = await fetch(apiUrl); // 실제 URL로 변경
      const data = await response.json();
      setFacility(data); // 데이터 상태 업데이트
    } catch (error) {
      console.error('Error fetching JSON data:', error);
    }

    setIsClicked(false); // 데이터 로딩이 끝나면 클릭 상태 해제
  };

  useEffect(() => {
    async function fetchResult() {
      if (facId) {
        // facId가 있을 때만 API 호출
        const apiUrl = `${API_URL}/api?facId=${facId}`; 
        try {
          const response = await fetch(apiUrl);
          const data = await response.json();
          setFacility(data); // 데이터 상태 업데이트
        } catch (error) {
          console.error('Error fetching facility data:', error);
        }
      }
    }

    fetchResult();
  }, [facId]); // facId가 변경될 때마다 호출

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
          {isClicked && console.log('검색 버튼이 클릭되었습니다.')}
        </S.SearchBtn>
        {facility && <div>{/* 데이터 표시 로직 추가 */}</div>}
      </div>
    </section>
  );
};

export default CategoryContainer;
