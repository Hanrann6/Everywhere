import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import FacilityImage from '../components/FacilityImage';
import FacilityDetails from '../components/FacilityDetails';
import Button from '../components/Button';
import KeywordList from '../components/KeywordList';
import NavBar from '../components/NavBar';
import data from '../data.json';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';

const Wrapper = styled.div`
  width: 100%;
`;

const Header = styled.div`
  margin: 0;
  padding: 40px 20px 0 40px;
  width: 100%;
  height: 70px;
  text-align: left;
  font-size: 20px;
  font-weight: 600;
`;

const ContentBox = styled.div`
  min-width: 1500px;
  height: 450px;
  background-color: rgb(134, 179, 130, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const TextBox = styled.div`
  margin: 20px;
  padding: 5px;
  width: 475px;
  height: 340px;
  background-color: rgb(37, 105, 31, 0.12);
  position: relative;
`;

const GoBack = styled.button`
  margin: 5px;
  padding: 5px;
  background: none;
  border: none;
`;

const GoReview = styled.div`
  position: absolute;
  bottom: 20px;
  left: 30px;
  right: 30px;
  display: flex;
  justify-content: space-between;
`;

function Facility() {
  const navigate = useNavigate();
  const { facId } = useParams();

  //useParams을 통해 url에서 받은 파라미터인 facId값을 json파일의 facId와 비교하여 같은 객체를 details에 저장
  const details = data.facility.find(fac => fac.facId === Number(facId));
  //details에서 value값 출력

  return (
    console.log({ details }),
    (
      <Wrapper>
        <NavBar />

        <Header>
          <GoBack onClick={() => navigate(-1)}>
            <FontAwesomeIcon icon={faAngleLeft} size="2x" />
          </GoBack>
          <span>시설 상세 정보</span>
        </Header>
        <ContentBox>
          <FacilityImage imagePath={details.imagePath}></FacilityImage>

          <TextBox>
            <FacilityDetails
              location={details.flour}
              name={details.facName}
              time={details.time}
              content={details.content}
            ></FacilityDetails>

            <KeywordList facId={Number(facId)}></KeywordList>

            <GoReview>
              <Button
                title="리뷰 확인하기"
                onClick={() => {
                  navigate('/review');
                }}
              />
              <Button
                title="리뷰 작성하기"
                onClick={() => {
                  navigate('/write');
                }}
              ></Button>
            </GoReview>
          </TextBox>
        </ContentBox>
      </Wrapper>
    )
  );
}

export default Facility;
