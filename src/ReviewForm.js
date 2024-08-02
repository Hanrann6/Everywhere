import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faThumbsDown } from "@fortawesome/free-solid-svg-icons";

const ReviewForm = () => {
  function reveiwGood() {
    console.log(1);
  }

  return (
    <div>
      <form className="review-box">
        <div className="review-good">
          <FontAwesomeIcon onClick={reveiwGood} icon={faThumbsUp} />
          <FontAwesomeIcon onClick={reveiwGood} icon={faThumbsDown} />
        </div>
        <div className="review-box__write">
          <input id="write" placeholder="후기를 남겨주세요!"></input>
          <input id="write-btn" type="submit"></input>
        </div>
      </form>
      <script
        src="https://kit.fontawesome.com/c57ec26571.js"
        crossorigin="anonymous"
      ></script>
    </div>
  );
};

export default ReviewForm;
