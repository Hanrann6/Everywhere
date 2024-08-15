import styled from 'styled-components';
import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import bgImg from '../assets/home_bg.png';

const Category = styled.button`
  background-color: ${props => props.bgColor};
  color: ${({ theme }) => theme.white};
  border: none;
  border-radius: 12px;
  padding: 7px 15px;
`;

const H2Text = styled.h2`
  position: absolute;
  top: 15%;
  left: 50%;
  color: ${({ theme }) => theme.black};
  transform: translateX(-50%);
`;

const Horizontal = styled.div`
  display: flex;
  justifiy-content: center;
  gap: 15px;
`;

const HorizontalUl = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding-left: 0;
  align-items: center;
  padding-inline-start: 20%;
`;

const CategoryUlLi = styled.li`
  list-style: none;
  justify-content: center;
  padding: 3px;
  margin: 3px 0;
`;

const SearchBtn = styled.button`
  background-color: ${({ theme }) => theme.ewhaGreen};
  color: ${({ theme }) => theme.white};
  border: none;
  border-radius: 20px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  position: absolute;
  left: 50%;
  transform: translateX(-50%); /*왼쪽으로 요소의 50% 너비만큼 이동*/
`;

const Home = props => {
  const [color, setColor] = useState(({ theme }) => theme.gray);

  const onClick = () => {
    if (color === props.theme.gray) {
      setColor(props.theme.subGreen);
    } else {
      // 클릭을 비활성화하거나 아무 작업도 하지 않음
      return;
    }
  };

  return (
    <div className="root">
      <NavBar />
      <section style={{ backgroundImage: { bgImg } }}>
        <div className="main_img">
          <H2Text>이화여자대학교 어디로 갈까요?</H2Text>
          <div className="category_list">
            <div className="vertical">
              <ul>
                <CategoryUlLi>
                  <Horizontal>
                    <HorizontalUl>
                      <CategoryUlLi>
                        <div className="lititle">
                          <Category bgColor={({ theme }) => theme.black}>
                            전체
                          </Category>
                        </div>
                      </CategoryUlLi>
                      <CategoryUlLi>
                        <Category bgColor={color} onClick={onClick}>
                          ECC
                        </Category>
                      </CategoryUlLi>
                      <CategoryUlLi>
                        <Category bgColor={color} onClick={onClick}>
                          중앙도서관
                        </Category>
                      </CategoryUlLi>
                      <CategoryUlLi>
                        <Category bgColor={color} onClick={onClick}>
                          학생문화관
                        </Category>
                      </CategoryUlLi>
                      <CategoryUlLi>
                        <Category bgColor={color} onClick={onClick}>
                          학관
                        </Category>
                      </CategoryUlLi>
                      <CategoryUlLi>
                        <Category bgColor={color} onClick={onClick}>
                          종합과학관
                        </Category>
                      </CategoryUlLi>
                      <CategoryUlLi>
                        <Category bgColor={color} onClick={onClick}>
                          아산공학관
                        </Category>
                      </CategoryUlLi>
                      <CategoryUlLi>
                        <Category bgColor={color} onClick={onClick}>
                          신공학관
                        </Category>
                      </CategoryUlLi>
                      <CategoryUlLi>
                        <Category bgColor={color} onClick={onClick}>
                          신세계관
                        </Category>
                      </CategoryUlLi>
                      <CategoryUlLi>
                        <Category bgColor={color} onClick={onClick}>
                          포스코관
                        </Category>
                      </CategoryUlLi>
                    </HorizontalUl>
                  </Horizontal>
                </CategoryUlLi>
                <CategoryUlLi>
                  <Horizontal>
                    <HorizontalUl>
                      <CategoryUlLi>
                        <div className="lititle">
                          <Category bgColor={({ theme }) => theme.black}>
                            스터디
                          </Category>
                        </div>
                      </CategoryUlLi>
                      <CategoryUlLi>
                        <Category bgColor={color} onClick={onClick}>
                          콘센트
                        </Category>
                      </CategoryUlLi>
                      <CategoryUlLi>
                        <Category bgColor={color} onClick={onClick}>
                          타이핑
                        </Category>
                      </CategoryUlLi>
                      <CategoryUlLi>
                        <Category bgColor={color} onClick={onClick}>
                          큰 소리로 대화
                        </Category>
                      </CategoryUlLi>
                      <CategoryUlLi>
                        <Category bgColor={color} onClick={onClick}>
                          소근소근 대화
                        </Category>
                      </CategoryUlLi>
                      <CategoryUlLi>
                        <Category bgColor={color} onClick={onClick}>
                          팀플
                        </Category>
                      </CategoryUlLi>
                    </HorizontalUl>
                  </Horizontal>
                </CategoryUlLi>
                <CategoryUlLi>
                  <Horizontal>
                    <HorizontalUl>
                      <CategoryUlLi>
                        <div className="lititle">
                          <Category bgColor={({ theme }) => theme.black}>
                            휴식
                          </Category>
                        </div>
                      </CategoryUlLi>
                      <CategoryUlLi>
                        <Category bgColor={color} onClick={onClick}>
                          누울 수 있는
                        </Category>
                      </CategoryUlLi>
                      <CategoryUlLi>
                        <Category bgColor={color} onClick={onClick}>
                          취식
                        </Category>
                      </CategoryUlLi>
                      <CategoryUlLi>
                        <Category bgColor={color} onClick={onClick}>
                          편의시설
                        </Category>
                      </CategoryUlLi>
                      <CategoryUlLi>
                        <Category bgColor={color} onClick={onClick}>
                          식음료점
                        </Category>
                      </CategoryUlLi>
                    </HorizontalUl>
                  </Horizontal>
                </CategoryUlLi>
                <CategoryUlLi>
                  <Horizontal>
                    <HorizontalUl>
                      <CategoryUlLi>
                        <div className="lititle">
                          <Category bgColor={color} onClick={onClick}>
                            예약
                          </Category>
                        </div>
                      </CategoryUlLi>
                      <CategoryUlLi>
                        <Category bgColor={color} onClick={onClick}>
                          공간 예약
                        </Category>
                      </CategoryUlLi>
                      <CategoryUlLi>
                        <Category bgColor={color} onClick={onClick}>
                          좌석 발급
                        </Category>
                      </CategoryUlLi>
                    </HorizontalUl>
                  </Horizontal>
                </CategoryUlLi>
                <CategoryUlLi>
                  <Horizontal>
                    <HorizontalUl>
                      <CategoryUlLi>
                        <div className="lititle">
                          <Category bgColor={({ theme }) => theme.black}>
                            기타
                          </Category>
                        </div>
                      </CategoryUlLi>
                      <CategoryUlLi>
                        <Category bgColor={color} onClick={onClick}>
                          24시간
                        </Category>
                      </CategoryUlLi>
                      <CategoryUlLi>
                        <Category bgColor={color} onClick={onClick}>
                          PC
                        </Category>
                      </CategoryUlLi>
                      <CategoryUlLi>
                        <Category bgColor={color} onClick={onClick}>
                          프린터기
                        </Category>
                      </CategoryUlLi>
                    </HorizontalUl>
                  </Horizontal>
                </CategoryUlLi>
              </ul>
            </div>
          </div>
          <SearchBtn />
        </div>
      </section>
      <footer>이용약관</footer>
    </div>
  );
};

export default Home;
