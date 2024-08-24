import * as S from './FacilityDetails.style';
import { SlLocationPin } from 'react-icons/sl';
import { FiClock } from 'react-icons/fi';

export const FacilityDetails = ({ name, location, time, content }) => {
  return (
    <S.Wrapper>
      <S.Text color="black" size="21.5px" weight="600">
        <SlLocationPin
          size={27}
          style={{
            marginRight: '8px',
            marginTop: '2px',
            filter: 'drop-shadow(0 2px 2px rgba(0, 0, 0, 0.2))',
          }}
        />

        {location}
        {' | '}
        {name}
      </S.Text>
      <S.Text color="#25691F" size="19px" weight="600">
        <FiClock
          size={26}
          style={{
            marginRight: '8px',
            marginTop: '2px',
            filter: 'drop-shadow(0 2px 2px rgba(0, 0, 0, 0.2))',
          }}
        />
        {time}
      </S.Text>
      <S.Text color="rgb(0,0,0, 0.6)" size="18px" weight="500">
        {content}
      </S.Text>
    </S.Wrapper>
  );
};
