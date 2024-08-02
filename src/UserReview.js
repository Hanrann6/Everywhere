import React from "react";

const UserReview = (review) => {
  return (
    <div className="review-list">
      <h4>{review.user}</h4>
      <p>{review.comment}</p>
    </div>
  );
};

export default UserReview;
