import "./App.css";

import FacilityDetails from "./FacilityDetails";
import UserReviews from "./UserReview";
import ReviewForm from "./ReviewForm";
import ReviewList from "./ReviewList";

function App() {
  return (
    <div className="App">
      <main>
        <FacilityDetails />
        <ReviewList />
        <ReviewForm />
      </main>
    </div>
  );
}

export default App;
