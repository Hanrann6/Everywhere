import "./App.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faThumbsDown } from "@fortawesome/free-solid-svg-icons";

function App() {
  let [시설이름] = useState("이화.신한 열람실");
  let [위치] = useState("ECC B3층 2번 출입구");
  let [운영시간] = useState("매일 6:00-22:00");
  let [한줄설명] = useState("조용한 열람실");
  let [키워드] = useState("콘센트, 키스킨, ..");

  function reveiwGood() {
    console.log(1);
  }

  return (
    <div className="App">
      <div className="details-header">
        <div className="details-img">
          <img
            width="400px"
            height="300px"
            className="place-img"
            src="https://mblogthumb-phinf.pstatic.net/MjAyMTEwMTZfMTQw/MDAxNjM0MzcxNzUxMTE1.lCJekE4fcSfSxuZfqlNtHkDMZjXx-wv0U0j8fLSQQY4g.dsYmj9VR9rmBkAbH_NCn030BSh6cGjxxdND19IQ8-BQg.JPEG.je505050/KakaoTalk_20211016_170613754_05.jpg?type=w800"
          />
        </div>
        <div className="details-text">
          <h1 className="details-text__title">{시설이름}</h1>
          <ul className="inform">
            <li className="inform__location">{위치}</li>
            <li className="inform__time">{운영시간}</li>
            <li className="inform__line">{한줄설명}</li>
            <li className="inform__keyword">{키워드}</li>
          </ul>
        </div>
      </div>

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
}

export default App;
