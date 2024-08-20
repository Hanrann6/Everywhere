import bgImg from '../assets/home_bg.png';
import resultIcon from '../assets/resultIcon.svg';
import * as S from '../styles/home';
import { Category, NavBar } from '../components';
import { Result } from '../components/Result/Result';
import { Footer } from '../components/common/Footer.js';

const Home = () => {
  const MENU_NAMES1 = [
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


  const searchResults = [101, 102, 103, 201];
  // 검색 결과 예시 데이터 -> 시설 ID 리스트 
  // TODO Request
    
  return (
    <S.Root>
      <NavBar />
      <section style={{ backgroundImage: { bgImg } }}>
        <div>
          <S.H2Text>이화여자대학교 어디로 갈까요?</S.H2Text>
          <div>
            <ul>
              <S.CategoryUlLi>
                <S.Horizontal>
                  <S.HorizontalUl>
                    {MENU_NAMES1.map((menu, index) => (
                      <Category
                        key={menu}
                        name={menu}
                        color={index === 0 && '#000'}
                        margin-right={index === 0 && 40}
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
                        color={index === 0 && '#000'}
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
                        color={index === 0 && '#000'}
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
                        color={index === 0 && '#000'}
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
                        color={index === 0 && '#000'}
                      />
                    ))}
                  </S.HorizontalUl>
                </S.Horizontal>
              </S.CategoryUlLi>
            </ul>
          </div>
          <S.SearchBtn />
        </div>
      </section>

      <Result results={searchResults}/>
      <Footer />
    </S.Root>
  );
};

export default Home;
