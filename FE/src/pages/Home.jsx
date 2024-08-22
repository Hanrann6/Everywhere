import bgImg from '../assets/home_bg.png';
import * as S from '../styles/home';
import { Category, NavBar } from '../components';
import { Result } from '../components/Result/Result';
import { Footer } from '../components/common/Footer.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { newKeywordList } from '../components/common/Category/Category';

const Home = () => {
  const MENU_NAMES1 = [
    '건물',
    '전체',
    'ECC',
    '중앙도서관',
    '학생문화관',
    '학관',
    '종합과학관',
    '아산공학관',
    '신공학관',
    '신세계관',
    '포스코관',
  ];
  const MENU_NAMES2 = [
    '스터디',
    '콘센트',
    '타이핑',
    '큰 소리로 대화',
    '소근소근 대화',
    '팀플',
  ];
  const MENU_NAMES3 = ['휴식', '누울 수 있는', '취식', '편의시설', '식음료점'];
  const MENU_NAMES4 = ['예약', '공간 예약', '좌석 발급'];
  const MENU_NAMES5 = ['기타', '24시간', 'PC', '프린터기'];

  const searchResults = [
    {
      // 검색 결과 테스트 데이터
      // TODO: Request
      id: 1,
      post: {
        postId: 1,
        postName: '공대도서관',
        imagepath: '????',
        content: '공대생들을 위한 도서관',
        location: '아산공학관 2층',
        time: '08:00~22:00',
      },
    },
    {
      id: 5,
      post: {
        postId: 5,
        postName: '이화상점',
        imagepath: '????',
        content: '공대에 위치한 편의점',
        location: '아산공학관 1층',
        time: '24시간(심야 시간 무인 운영)',
      },
    },
  ];

  return (
    <S.Root>
      <NavBar />
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
                      />
                    ))}
                  </S.HorizontalUl>
                </S.Horizontal>
              </S.CategoryUlLi>
            </ul>
          </div>
          <S.SearchBtn>
            검색하기 <FontAwesomeIcon icon={faMagnifyingGlass} />
          </S.SearchBtn>
        </div>
      </section>

      <Result results={searchResults} />
      <Footer />
    </S.Root>
  );
};

export default Home;
