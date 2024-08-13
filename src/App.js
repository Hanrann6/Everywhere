import { Routes, Route, BrowserRouter } from "react-router-dom";
import Facility from "./pages/Facility";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="fac/:facId" element={<Facility />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
