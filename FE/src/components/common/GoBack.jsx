import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { useState } from 'react';
import { useNavigate } from 'react-router';

const Wrapper = styled.button`
  background: none;
  border: none;
`;

export function GoBack() {
  const navigate = useNavigate();
  const [isHover, setHover] = useState(false);
  return (
    <Wrapper onClick={() => navigate(-1)}>
      <FontAwesomeIcon
        icon={faAngleLeft}
        size="3x"
        style={{ cursor: 'pointer', color: isHover ? '#00462a' : 'black' }}
        onMouseOver={() => setHover(true)}
        onMouseOut={() => setHover(false)}
      />
    </Wrapper>
  );
}
