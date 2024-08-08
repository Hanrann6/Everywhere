import React from "react";
import styled from "styled-components";

const Image = styled.image`
  margin-right: 30px;
`;

function FacilityImage(props) {
  const { imagePath } = props;

  return (
    <Image>
      <img width="400px" height="300px" src={imagePath} alt="" />
    </Image>
  );
}

export default FacilityImage;
