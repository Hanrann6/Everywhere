import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  Button,
  FacilityDetails,
  FacilityImage,
  KeywordList,
} from '../components/Details';
import { NavBar } from '../components';
import { GoBack } from '../components';
import { API_URL } from '../constants';
import * as S from '../styles/facility';

function Facility() {
  const navigate = useNavigate();
  const { facId } = useParams();
  const [facility, setFacility] = useState(null);
  const [error, setError] = useState(null); // 에러 상태 추가

  useEffect(() => {
    async function fetchFacility() {
      try {
        const response = await fetch(`${API_URL}/fac/${facId}`);
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`); // 응답 상태 체크
        }
        const data = await response.json();
        setFacility(data);
      } catch (error) {
        setError(error.message); // 에러 처리
      }
    }
    //에러 발생 예외처리

    fetchFacility();
  }, [facId]);

  if (error) return <div>Error: {error}</div>;
  if (!facility) return null;

  // const { imagePath, flour, facName, time, content } = facility;

  return (
    <S.Wrapper>
      <NavBar />
      <S.Header>
        {<GoBack />}
        <span>시설 상세 정보</span>
      </S.Header>
      <S.ContentBox>
        <FacilityImage
          width="450px"
          height="337px"
          imagePath={facility?.imagepath}
        />
        <S.TextBox>
          <FacilityDetails
            location={facility?.flour}
            name={facility?.fac_name}
            time={facility?.time}
            content={facility?.info}
          />
          <KeywordList facility={facility} />
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
  );
}

export default Facility;
