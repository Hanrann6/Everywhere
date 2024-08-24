import * as S from './ResultBox.styles';
import { useNavigate } from 'react-router-dom';

import { FacilityImage } from '../Details';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';

export function ResultBox({ facility }) {
  const navigate = useNavigate();
  const onClick = () => {
    navigate(`${API_URL}/fac/${facility.fac_id}`);
  };

  return (
    <S.Box>
      <S.Image onClick={onClick}>
        <FacilityImage
          width="285px"
          height="190px"
          imagePath={facility.imagepath}
        />
      </S.Image>
      <S.PostName>{facility.fac_name}</S.PostName>
      <S.GreenText>
        <S.Location>
          <FontAwesomeIcon
            icon={faLocationDot}
            style={{ marginRight: '6px' }}
          />
          {facility.flour}
        </S.Location>
        <S.Time>
          <FontAwesomeIcon icon={faClock} style={{ marginRight: '6px' }} />
          {facility.time}
        </S.Time>
      </S.GreenText>
    </S.Box>
  );
}
