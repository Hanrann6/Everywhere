import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Wrapper = styled.div`
  margin: 10px 10px 0 10px;
  padding: 15px;
  background-color: #25691f 0.12;
  display: flex;
  flex-direction: column;
  text-align: left;
`;
const Text = styled.div`
  margin: 5px;
  padding: 3px;
  display: flex;
  flex-direction: row;
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
`;

function FacilityDetails(props) {
  const { name, location, time, content } = props;

  return (
    <Wrapper>
      <Text color="black" size="20px" weight="600">
        <FontAwesomeIcon icon={faLocationDot} />
        {location}
        {" | "}
        {name}
      </Text>
      <Text color="#25691F" size="17px" weight="600">
        <FontAwesomeIcon icon={faClock} />
        {time}
      </Text>
      <Text color="rgb(0,0,0, 0.6)">{content}</Text>
    </Wrapper>
  );
}

export default FacilityDetails;
