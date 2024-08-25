import { useState } from 'react';
import { NavBar } from '../components';
import { GoBack } from '../components';
import * as S from '../styles/showbuilding';
import bgImg from '../assets/building_bg.png';
import { SlLocationPin } from 'react-icons/sl';

export const MENU_NAME = [
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

export const Flour = [
  {
    flour: '7층',
    list: ['미디어커리센터', '국가고시 준비반'],
  },
  {
    flour: '6층',
    list: ['열람실', '유료 사물함'],
  },
  {
    flour: '3~5층',
    list: ['강의실'],
  },
  {
    flour: '2층',
    list: ['둥근 탁자와 긴 의자', '복합기'],
  },
  {
    flour: '1층',
    list: ['둥근 탁자와 긴 의자'],
  },
  {
    flour: 'B1층',
    list: [
      '사회과학대학 학생회실',
      '신한 ATM',
      '긴 의자',
      '휴게실',
      'CU 편의점',
      '더벤티',
      '오봉도시락',
      '둥근 탁자와 긴 의자',
      '복합기',
      '스마트 라운지',
      'PC실',
      '파리바게트',
      '복사실',
      '넓은 테이블 좌석',
    ],
  },
];

const ShowBuilding = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = index => {
    setActiveIndex(index);
  };

  return (
    <S.Wrapper>
      <NavBar />
      <S.Header>
        <S.StyledGoback>
          <GoBack />
        </S.StyledGoback>
        <S.MenuBar>
          {MENU_NAME.map((key, index) => (
            <S.StyledMenu
              key={index}
              className={activeIndex === index ? 'active' : ''}
              backgroundColor={index === 8 ? '#25691F' : undefined} // 인덱스 8인 항목에만 초록색 배경 적용
              onClick={() => handleClick(index)}
            >
              {key}
            </S.StyledMenu>
          ))}
        </S.MenuBar>
      </S.Header>

      <S.Body style={{ backgroundImage: `url(${bgImg})` }}>
        <S.BuildingName>
          <SlLocationPin
            size={27}
            style={{
              marginRight: '13px',
            }}
          />
          포스코관
        </S.BuildingName>
        <S.Info>
          {Flour.map(flour => (
            <S.FlourBox key={flour.flour}>
              <S.Flour>{flour.flour}</S.Flour>
              <S.Facility>
                {flour.list.map((facility, index) => (
                  <S.FacilityItem key={index}>{facility}</S.FacilityItem>
                ))}
              </S.Facility>
            </S.FlourBox>
          ))}
        </S.Info>
      </S.Body>
    </S.Wrapper>
  );
};

export default ShowBuilding;
