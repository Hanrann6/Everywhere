import React from "react";
import UserReview from "./UserReview";

const ReviewList = () => {
  return (
    <div>
      <UserReview user={"익명1"} comment={"조용해요"} />
      <UserReview user={"익명2"} comment={"공부하기 너무 좋아요"} />
    </div>
  );
};

export default ReviewList;
