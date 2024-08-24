import styled from 'styled-components';
import { SlLocationPin } from 'react-icons/sl';
import * as S from '../components/Details/FacilityDetails.style';

export const Location = ({ name }) => {
  return (
    <div
      style={{
        width: '680px',
        height: '36px',
        display: 'flex',
        justifySelf: 'center',
        justifyContent: 'center',
      }}
    >
      <S.Text color="black" size="21.5px" weight="600">
        <SlLocationPin
          size={27}
          style={{
            marginRight: '8px',
            marginTop: '2px',
            filter: 'drop-shadow(0 2px 2px rgba(0, 0, 0, 0.2))',
          }}
        />

        {name}
      </S.Text>
    </div>
  );
};

const getColor = index => {
  switch (index) {
    case '0':
      return '#00462A';
    case '1':
      return '#25691F'; // GrAnalytics가 색상 값이 아니면 적절한 색상 값으로 변경
    case '2':
      return '#3E7339'; // GrAnalytics가 색상 값이 아니면 적절한 색상 값으로 변경
    default:
      return 'black';
  }
};

export const Border = styled.div`
  width: 680px;
  height: 650px;
  margin: 0 auto;
  padding-top: 150px;
  display: block;
  flex-wrap: row wrap;
  justify-content: center;
  align-items: baseline;
`;

export const ReviewsContainer = styled.div`
  width: 650px;
  height: 390px;
  margin-top: 70px;
  overflow-x: hidden;
  overflow-y: auto;

  display: block;
  flex-wrap: row wrap;
  justify-content: start;
  align-items: baseline;
  justify-self: auto;
`;

export const Review = styled.div`
  width: 630px;
  height: 165px;
  margin-top: 100px;
  margin-bottom: 100px;
  margin-left: 20px;
  margin-right: 20px;

  display: block;
  flex-wrap: row nowrap;
`;

export const Profile = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #e2e2e2;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Detail = styled.div`
  width: 590px;
  height: 50px;
  display: flex;
  flex-wrap: colum nowrap;
  justify-content: center;
`;

export const ID = styled.div`
  width: 60px;
  height: 50px;
  font-size: 20px;
  font-weight: 600;
  text-align: start;

  margin-top: 16px;
  margin-left: 13px;
  margin-right: 350px;

  justify-content: start;
  justify-self: start;
  align-self: center;
`;

export const Date = styled.div`
  width: 96px;
  height: 50px;
  font-size: 17px;
  font-weight: 500;
  text-align: right;
  margin-top: 35px;

  justify-content: end;
  justify-self: end;
  align-self: center;
`;

export const Content = styled.div`
  width: 560px;
  height: 100px;
  border-radius: 30px;
  background-color: #e2e2e2;
  margin-top: 20px;
  padding: 30px;

  text-align: left;
  font-size: 17px;
  font-weight: 500;
`;

export const Line = styled.hr`
  width: 600px;
  height: 1.5px;
  border: 0;
  background-color: #25691f;
  margin: 50px;
  justify-self: center;
  align-self: center;
`;
