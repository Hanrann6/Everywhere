import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  padding: 5px;
  width: 100px;
  height: 30px;
  color: white;
  background-color: #25691f;
  border-radius: 5px;
`;

function Button(props) {
  const { title, onClick } = props;

  return <StyledButton onClick={onClick}>{title}</StyledButton>;
}

export default Button;
