import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme.js';

import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import SignUp from './pages/Signup.jsx';
import Facility from './pages/Facility.jsx';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/fac/:facId" element={<Facility />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}
export default App;
