import bgImg from '../assets/home_bg.png';
import resultIcon from '../assets/resultIcon.svg';
import * as S from '../styles/home';
import { Category, NavBar } from '../components';

const Home = () => {
  const MENU_NAMES = [
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
                    {MENU_NAMES.map((menu, index) => (
                      <Category key={menu} name={menu} color={index === 0 && '#000'} />
                    ))}
                  </S.HorizontalUl>
                </S.Horizontal>
              </S.CategoryUlLi>
              <S.CategoryUlLi>
                <S.Horizontal>
                  <S.HorizontalUl>
                    <S.CategoryUlLi>
                      <div>
                        <S.Category>스터디</S.Category>
                      </div>
                    </S.CategoryUlLi>
                    <S.CategoryUlLi>
                      <S.Category>콘센트</S.Category>
                    </S.CategoryUlLi>
                    <S.CategoryUlLi>
                      <S.Category>타이핑</S.Category>
                    </S.CategoryUlLi>
                    <S.CategoryUlLi>
                      <S.Category>큰 소리로 대화</S.Category>
                    </S.CategoryUlLi>
                    <S.CategoryUlLi>
                      <S.Category>소근소근 대화</S.Category>
                    </S.CategoryUlLi>
                    <S.CategoryUlLi>
                      <S.Category>팀플</S.Category>
                    </S.CategoryUlLi>
                  </S.HorizontalUl>
                </S.Horizontal>
              </S.CategoryUlLi>
              <S.CategoryUlLi>
                <S.Horizontal>
                  <S.HorizontalUl>
                    <S.CategoryUlLi>
                      <div className="lititle">
                        <S.Category>휴식</S.Category>
                      </div>
                    </S.CategoryUlLi>
                    <S.CategoryUlLi>
                      <S.Category>누울 수 있는</S.Category>
                    </S.CategoryUlLi>
                    <S.CategoryUlLi>
                      <S.Category>취식</S.Category>
                    </S.CategoryUlLi>
                    <S.CategoryUlLi>
                      <S.Category>편의시설</S.Category>
                    </S.CategoryUlLi>
                    <S.CategoryUlLi>
                      <S.Category>식음료점</S.Category>
                    </S.CategoryUlLi>
                  </S.HorizontalUl>
                </S.Horizontal>
              </S.CategoryUlLi>
              <S.CategoryUlLi>
                <S.Horizontal>
                  <S.HorizontalUl>
                    <S.CategoryUlLi>
                      <div className="lititle">
                        <S.Category>예약</S.Category>
                      </div>
                    </S.CategoryUlLi>
                    <S.CategoryUlLi>
                      <S.Category>공간 예약</S.Category>
                    </S.CategoryUlLi>
                    <S.CategoryUlLi>
                      <S.Category>좌석 발급</S.Category>
                    </S.CategoryUlLi>
                  </S.HorizontalUl>
                </S.Horizontal>
              </S.CategoryUlLi>
              <S.CategoryUlLi>
                <S.Horizontal>
                  <S.HorizontalUl>
                    <S.CategoryUlLi>
                      <div>
                        <S.Category>기타</S.Category>
                      </div>
                    </S.CategoryUlLi>
                    <S.CategoryUlLi>
                      <S.Category>24시간</S.Category>
                    </S.CategoryUlLi>
                    <S.CategoryUlLi>
                      <S.Category>PC</S.Category>
                    </S.CategoryUlLi>
                    <S.CategoryUlLi>
                      <S.Category>프린터기</S.Category>
                    </S.CategoryUlLi>
                  </S.HorizontalUl>
                </S.Horizontal>
              </S.CategoryUlLi>
            </ul>
          </div>
          <S.SearchBtn>
            <img src={resultIcon} alt="" />
          </S.SearchBtn>
        </div>
      </section>

      <footer>이용약관</footer>
    </S.Root>
  );
};

export default Home;
