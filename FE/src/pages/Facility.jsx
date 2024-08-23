import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  Button,
  FacilityDetails,
  FacilityImage,
  KeywordList,
} from '../components/Details';
import { NavBar } from '../components';
import { API_URL } from '../constants';
import * as S from '../styles/facility';

function Facility() {
  const navigate = useNavigate();
  const { facId } = useParams();
  const [facility, setFacility] = useState(null);

  useEffect(() => {
    async function fetchFacility() {
      const response = await fetch(`${API_URL}/fac/${facId}`);
      const data = await response.json();
      console.log(123, data);
      setFacility(data);
    }
    //에러 발생 예외처리

    fetchFacility();
  }, [facId]);

  if (!facility) return null;
  // const { imagePath, flour, facName, time, content } = facility;

  return (
    <S.Wrapper>
      <NavBar />
      <S.Header>
        {/* <GoBack /> */}
        <span>시설 상세 정보</span>
      </S.Header>
      <S.ContentBox>
        <FacilityImage
          width="450px"
          height="337px"
          imagePath={facility?.imagePath}
        />
        <S.TextBox>
          <FacilityDetails
            location={facility?.flour}
            name={facility?.facName}
            time={facility?.time}
            content={facility?.content}
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
  );
}

export default Facility;
