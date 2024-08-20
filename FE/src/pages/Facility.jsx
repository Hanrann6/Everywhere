import { useNavigate, useParams } from 'react-router-dom';
import {
  Button,
  FacilityDetails,
  FacilityImage,
  KeywordList,
} from '../components/Details';
import { NavBar } from '../components';
import * as S from '../styles/facility';
import data from '../data.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

function Facility() {
  const navigate = useNavigate();
  const { facId } = useParams();

  //useParams을 통해 url에서 받은 파라미터인 facId값을 json파일의 facId와 비교하여 같은 객체를 details에 저장
  const details = data.facility.find(fac => fac.facId === Number(facId));
  //details에서 value값 출력

  return (
    console.log({ details }),
    (
      <S.Wrapper>
        <NavBar />

        <S.Header>
          <S.GoBack onClick={() => navigate(-1)}>
            <FontAwesomeIcon icon={faAngleLeft} size="2x" />
          </S.GoBack>
          <span>시설 상세 정보</span>
        </S.Header>

        <S.ContentBox>
          <FacilityImage
            width="450px"
            height="337px"
            imagePath={details.imagePath}
          />

          <S.TextBox>
            <FacilityDetails
              location={details.flour}
              name={details.facName}
              time={details.time}
              content={details.content}
            />

            <KeywordList facId={Number(facId)} />

            <S.GoReview>
              <Button
                title="리뷰 확인하기"
                onClick={() => {
                  navigate('/review');
                }}
              />
              <Button
                title="리뷰 작성하기"
                onClick={() => {
                  navigate('/write');
                }}
              />
            </S.GoReview>
          </S.TextBox>
        </S.ContentBox>
      </S.Wrapper>
    )
  );
}

export default Facility;
