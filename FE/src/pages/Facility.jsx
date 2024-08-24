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
import { LuPencil } from 'react-icons/lu';

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

    fetchFacility();
  }, [facId]);

  if (error) return <div>Error: {error}</div>;
  if (!facility) return null;

  const { imagepath, flour, fac_name, time, info } = facility;

  return (
    <S.Wrapper>
      <NavBar />
      <S.Header>
        <S.GobackWrapper>{<GoBack />}</S.GobackWrapper>
        <S.Text>시설 상세 정보</S.Text>
      </S.Header>
      <S.ContentBox>
        <FacilityImage width="450px" height="337px" imagePath={imagepath} />
        <S.TextBox>
          <FacilityDetails
            location={flour}
            name={fac_name}
            time={time}
            content={info}
          />
          <KeywordList facility={facility} />
          <S.GoReview>
            <Button
              title="리뷰 확인하기"
              onClick={() => {
                navigate(`/printreview/${facId}`, {
                  state: { props: fac_name },
                });
              }}
            />
            <Button
              title={
                <span style={{ display: 'flex', alignItems: 'center' }}>
                  리뷰 작성하기
                  <LuPencil size={18} style={{ marginLeft: '6px' }} />
                </span>
              }
              onClick={() => {
                navigate('/write');
              }}
            ></Button>
          </S.GoReview>
        </S.TextBox>
      </S.ContentBox>
    </S.Wrapper>
  );
}

export default Facility;
