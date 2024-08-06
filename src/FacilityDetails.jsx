import React from "react";
import styled from "styled-components";

function FacilityDetails(props) {
  const { name, location, time, content } = props;

  return (
    <div>
      <div>{name}</div>
      <div>{location}</div>
      <div>{time}</div>
      <div>{content}</div>
    </div>
  );
}

export default FacilityDetails;
