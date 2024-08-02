import React from "react";

const UserReviews = ({ reviews }) => {
  return (
    <div className="review">
      <h2>사용자 리뷰</h2>
      <div className="review-list">
        <h4>익명</h4>
        <p>사용자 리뷰</p>
      </div>
      <div className="review-list">
        <h4>익명</h4>
        <p>사용자 리뷰</p>
      </div>
      <div className="review-list">
        <h4>익명</h4>
        <p>사용자 리뷰</p>
      </div>
    </div>
  );
};

export default UserReviews;
