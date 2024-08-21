import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const Wrapper = styled.button`
  margin: 5px;
  padding: 5px;
  background: none;
  border: none;
`;

export function GoBack() {
  return (
    <Wrapper onClick={() => navigate(-1)}>
      <FontAwesomeIcon icon={faAngleLeft} size="3x" />
    </Wrapper>
  );
}
