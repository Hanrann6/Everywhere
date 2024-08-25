import { useState } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';

import { NavBar } from '../components';
import { Button } from '../components/Details';
import * as S from '../styles/writereview';
import { LuPencil } from 'react-icons/lu';
import { API_URL } from '../constants';
import { IoDocumentTextOutline } from 'react-icons/io5';

function WriteReview() {
  const { facId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const facName = location.state?.facName;

  const [density, setDensity] = useState(false);
  const [clean, setClean] = useState(false);
  const [satisfy, setSatisfy] = useState(false);
  const [comment, setComment] = useState('');

  const handleDensity = level => {
    const densityValue = level === '높음' ? 3 : level === '보통' ? 2 : 1;
    setDensity(densityValue);
  };

  const handleClean = level => {
    const cleanValue = level === '만족' ? 3 : level === '보통' ? 2 : 1;
    setClean(cleanValue);
  };

  const handleSatisfy = level => {
    const satisfyValue = level === '만족' ? 3 : level === '보통' ? 2 : 1;
    setSatisfy(satisfyValue);
  };

  const handleSubmit = async () => {
    if (
      density !== null &&
      clean !== null &&
      satisfy !== null &&
      comment !== ''
    ) {
      const reviewData = {
        fac_id: Number(facId),
        review: comment,
        density: density,
        clean: clean,
        satisfy: satisfy,
        date: new Date().toISOString().split('T')[0],
        user_id: 1,
      };

      console.log(reviewData);
      const res = await fetch(`${API_URL}/fac/reviews/${facId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(reviewData),
      });
      const data = await res.json();
      console.log(data);

      navigate(`/printreview/${facId}`, {
        state: { props: facName },
      });
    }
  };

  return (
    <S.Wrapper>
      <NavBar />
      <S.Body>
        <S.Header>
          <IoDocumentTextOutline
            size={25}
            style={{
              marginRight: '8px',
              marginTop: '2px',
            }}
          />

          <S.Title>리뷰 작성</S.Title>
          <S.FacName>{facName}</S.FacName>
        </S.Header>
        <S.Textbox
          placeholder="이 시설에 대한 한줄평을 작성해주세요."
          value={comment}
          onChange={e => setComment(e.target.value)}
        ></S.Textbox>
        <S.Choosebox>
          <S.Question>시설 밀집도는 어떤가요?</S.Question>
          <S.ButtonWrapper>
            {['높음', '보통', '낮음'].map(level => (
              <S.StyledButton
                key={level}
                onClick={() => handleDensity(level)}
                className={
                  density === (level === '높음' ? 3 : level === '보통' ? 2 : 1)
                    ? 'active'
                    : ''
                }
              >
                {level}
              </S.StyledButton>
            ))}
          </S.ButtonWrapper>

          <S.Question>시설이 청결하게 유지되고 있나요?</S.Question>
          <S.ButtonWrapper>
            {['만족', '보통', '불만족'].map(level => (
              <S.StyledButton
                key={level}
                onClick={() => handleClean(level)}
                className={
                  clean === (level === '만족' ? 3 : level === '보통' ? 2 : 1)
                    ? 'active'
                    : ''
                }
              >
                {level}
              </S.StyledButton>
            ))}
          </S.ButtonWrapper>

          <S.Question>전반적으로 시설에 만족하셨나요?</S.Question>
          <S.ButtonWrapper>
            {['만족', '보통', '불만족'].map(level => (
              <S.StyledButton
                key={level}
                onClick={() => handleSatisfy(level)}
                className={
                  satisfy === (level === '만족' ? 3 : level === '보통' ? 2 : 1)
                    ? 'active'
                    : ''
                }
              >
                {level}
              </S.StyledButton>
            ))}
          </S.ButtonWrapper>
        </S.Choosebox>

        <S.Text>※ 수정 및 삭제가 불가능하므로 신중히 작성해주세요.</S.Text>
        <S.Text>
          ※ 허위, 중복, 성의없는 내용을 작성할 경우, 서비스 이용이 제한될 수
          있습니다.
        </S.Text>
        <S.Footer>
          <Button
            title={
              <span style={{ display: 'flex', alignItems: 'center' }}>
                리뷰 등록하기
                <LuPencil size={18} style={{ marginLeft: '6px' }} />
              </span>
            }
            onClick={handleSubmit}
          ></Button>
        </S.Footer>
      </S.Body>
    </S.Wrapper>
  );
}

export default WriteReview;
