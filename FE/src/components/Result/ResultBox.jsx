import * as S from './ResultBox.styles';
import { useNavigate } from 'react-router-dom';

import { FacilityImage } from '../Details';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';

export function ResultBox({ facility }) {
  const navigate = useNavigate();
  const onClick = () => {
    navigate(`/fac`);
  };

  return (
    <S.Box onClick={onClick}>
      <S.Image>
        <FacilityImage
          width="285px"
          height="190px"
          imagePath={facility.post.imagePath}
        />
      </S.Image>
      <S.PostName>{facility.post.postName}</S.PostName>
      <S.Content>{facility.post.content}</S.Content>
      <S.GreenText>
        <S.Location>
          <FontAwesomeIcon
            icon={faLocationDot}
            style={{ marginRight: '6px' }}
          />

          {facility.post.location}
        </S.Location>
        <S.Time>
          <FontAwesomeIcon icon={faClock} style={{ marginRight: '6px' }} />
          {facility.post.time}
        </S.Time>
      </S.GreenText>
    </S.Box>
  );
}
