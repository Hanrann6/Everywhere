import * as S from './FacilityDetails.style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

export const FacilityDetails = ({ name, location, time, content }) => {
  return (
    <S.Wrapper>
      <S.Text color="black" size="21.5px" weight="600">
        <FontAwesomeIcon
          size="lg"
          style={{ marginRight: '8px', marginTop: '2px' }}
          icon={faLocationDot}
        />
        {location}
        {' | '}
        {name}
      </S.Text>
      <S.Text color="#25691F" size="18px" weight="600">
        <FontAwesomeIcon
          size="lg"
          style={{ marginRight: '8px', marginTop: '2px' }}
          icon={faClock}
        />
        {time}
      </S.Text>
      <S.Text color="rgb(0,0,0, 0.6)" size="16px" weight="500">
        {content}
      </S.Text>
    </S.Wrapper>
  );
};
