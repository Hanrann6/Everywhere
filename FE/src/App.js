import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login.jsx';
import Facility from './pages/Facility';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          
          <Route path="fac/:facId" element={<Facility />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
