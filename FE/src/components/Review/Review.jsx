import { API_URL } from '../../constants/index';
import * as S from '../../styles/review.js';
import { CiUser } from 'react-icons/ci';
import { useState, useEffect } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';

export const Review = () => {
  const location = useLocation();
  const facName = location.state.props;

  const { facId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch(`${API_URL}/fac/reviews/${facId}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
        });

        if (!response.ok) {
          const errorData = await response.json();
          alert('Failed to fetch: ' + errorData.message);
          return;
        }

        const result = await response.json();
        const reviewArray = Array.isArray(result) ? result : [result];
        setReviews(reviewArray);
      } catch (error) {
        alert('Error occurred: ' + error.message);
      }
    };

    fetchReviews();
  }, [facId]);

  return (
    <S.Border>
      <S.Location name={facName}></S.Location>
      <S.Line />
      <S.ReviewsContainer>
        {reviews.map(review => (
          <S.Review key={review.review_id}>
            <S.Detail>
              <S.Profile>
                <CiUser size="40px" />
              </S.Profile>
              <S.ID> 익명 {review.review_id}</S.ID>
              <S.Date> {review.date.substr(0, 10)} </S.Date>
            </S.Detail>
            <S.Content>{review.content}</S.Content>
          </S.Review>
        ))}
      </S.ReviewsContainer>
    </S.Border>
  );
};
