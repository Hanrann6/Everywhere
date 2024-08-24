import * as S from './ResultBox.styles';
import { useNavigate } from 'react-router-dom';
import { FacilityImage } from '../Details';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faClock } from '@fortawesome/free-solid-svg-icons';
import defaultImage from '../../assets/gray_ewhalogo.svg';


export function ResultBox({ facility }) {
  const navigate = useNavigate();

  const onClick = () => {
    navigate(`/fac/${facility.fac_id}`);
  };

  // 조건부 이미지 경로 설정
  let imagePath = facility.imagepath;
  if(imagePath == ""){
    imagePath = defaultImage; 
  } 

  return (
    <S.Box>
      <S.Image onClick={onClick}>
        <FacilityImage
          width="285px"
          height="190px"
          imagePath={imagePath}
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