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

  const handleKeywordList = newKeyword => {
    setKeywordList(newKeyword);
  };

  /*
// 여기부터 시작
function handleSearch {
  const navigate = useNavigate();
  const { build_id, facname } = useParams();
  const [facility, setFacility] = useState(null);
  
  // SearchResults에서 건물만 따로 빼야 함
  resultUrl = `{API_URL}/fac/buildingId=${KeywordList}`
  // 예시 
  ///fac?buildingId=${build_id}&socket_yn=${socket_yn}&eat_yn=true&


  useEffect(() => {
    async function fetchSearchBtn() {
      // get 요청 보내기
      const response = await fetch(`${API_URL}/fac?buildingId=${build_id}&buildingId=100&socket_yn=true&eat_yn=true`)
    }
  })

}
//여기가 끝
*/

  const handleSearch = () => {
    // 네트워크를 통해 json 파일을 취득해서 콘솔에 출력하는 코드
    async function logJSONData() {
      const response = await
    fetch("URL");
      const jsonData = await response.json(); // json() 메서드 호출
      console.log(jsonData);
    }
    

    console.log(keywordList);
    (keywordList[0]) 
    // TODO: 건물 - 전체 기능 추가 
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
