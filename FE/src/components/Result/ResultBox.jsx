import * as S from './ResultBox.styles';
import { useNavigate } from 'react-router-dom';

import { FacilityImage } from '../Details';

export function ResultBox({ facility }) {
  const navigate = useNavigate();
  const onClick = () => {
    navigate(`/fac`);
  };

  return (
    <S.Box onClick={onClick}>
      <S.Image>
        <FacilityImage
          width="275px"
          height="180px"
          imagePath={facility.imagePath}
        />
      </S.Image>
      <S.PostName>{facility.postName}</S.PostName>
      <S.Content>{facility.content}</S.Content>
      <S.Location>{facility.location}</S.Location>
      <S.Time>{facility.time}</S.Time>
    </S.Box>
  );
}
