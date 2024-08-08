import React from "react";
import { useNavigate } from "react-dom";
import { useState } from "react";
import styled from "styled-components";
import FacilityImage from "./FacilityImage";
import FacilityDetails from "./FacilityDetails";
import Button from "./Button";
import KeywordList from "./KeywordList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

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
  width: 100%;
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
  width: 473px;
  height: 330px;
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
  bottom: 30px;
  left: 30px;
  right: 30px;
  display: flex;
  justify-content: space-between;
`;

function Facility2(props) {
  return (
    <div>
      {/*네비게이션바*/}

      <Header>
        <GoBack>
          <FontAwesomeIcon icon={faAngleLeft} />
        </GoBack>
        <span>시설 상세 정보</span>
      </Header>
      <ContentBox>
        <FacilityImage
          imagePath={
            "https://www.ewha.ac.kr/_res/ewha/img/admission/img-admi01.gif"
          }
        ></FacilityImage>

        <TextBox>
          <FacilityDetails
            location={"B1층"}
            name={"CU 편의점 내부 복사실"}
            time={"08:00~19:00"}
            content={"포스코관 수업 전후 인쇄/복사 스팟"}
          ></FacilityDetails>
          <KeywordList></KeywordList>
          <GoReview>
            <Button title="리뷰 확인하기"></Button>
            <Button title="리뷰 작성하기"></Button>
          </GoReview>
        </TextBox>
      </ContentBox>
    </div>
  );
}

export default Facility2;
