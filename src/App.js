import "./App.css";

import FacilityDetails from "./FacilityDetails";
import UserReviews from "./UserReview";
import ReviewForm from "./ReviewForm";

function App() {
  return (
    <div className="App">
      <main>
        <FacilityDetails />
        <UserReviews />
        <ReviewForm />
      </main>
    </div>
  );
}

export default App;
