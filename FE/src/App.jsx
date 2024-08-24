import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme.js';

import { Home, Login, SignUp, Facility, Notice } from './pages';
import TermOfUse from './pages/TermOfUse.jsx';
import PrivacyPolicy from './pages/PrivacyPolicy.jsx';
import CancelAccount from './pages/CancelAccount.jsx';
import PrintReview from './pages/PrintReview.jsx';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/termofuse" element={<TermOfUse />} />
            <Route path="/privacypolicy" element={<PrivacyPolicy />} />
            <Route path="/cancelaccount" element={<CancelAccount />} />
            <Route path="/fac/:facId" element={<Facility />} />
            <Route path="/notice" element={<Notice />} />
            <Route path="/printreview/:facId" element={<PrintReview />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}
export default App;
