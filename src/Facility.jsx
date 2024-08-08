import React from "react";
import { useNavigate } from "react-dom";
import { useState } from "react";
import styled from "styled-components";
import FacilityImage from "./FacilityImage";
import FacilityDetails from "./FacilityDetails";
import Button from "./Button";

const ContentBox = styled.div`
  padding: 10px 20px;
  width: 1449px;
  height: 567px;
  background-color: #25691f 0.12;
`;

const TextBox = styled.div`
padding: 5px;
width: 628px
height: 445px;
background-color: #25691f 0.12;;
`;

function Facility(props) {
  const navigate = useNavigate();
  const [fac, setFac] = useState();
  return (
    <div>
      {/*네비게이션바*/}

      <div className="상단">
        {/*뒤로가기 버튼*/}
        <span>시설 상세 정보</span>
      </div>
      <ContentBox>
        <div className="왼쪽 사각형(이미지)">
          <FacilityImage imagePath={fac.imagePath}></FacilityImage>
        </div>

        <TextBox>
          <FacilityDetails
            name={fac.facName}
            location={fac.flour}
            time={fac.hour}
            content={fac.content}
          ></FacilityDetails>
          <Button
            title="리뷰 확인하기"
            onClick={() => {
              navigate("/");
            }}
          ></Button>
          <Button
            title="리뷰 작성하기"
            onClick={() => {
              navigate("/");
            }}
          ></Button>
        </TextBox>
      </ContentBox>
    </div>
  );
}

export default Facility;
