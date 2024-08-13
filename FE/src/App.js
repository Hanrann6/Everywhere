import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login.jsx';
import SignUp from './pages/SignUp.jsx';
<<<<<<< HEAD
import Facility from './pages/Facility';
=======
import Home from "./pages/Home.jsx";
import "./App.css";

//import Login from './pages/Login.jsx';
//import SignUp from './pages/SignUp.jsx';
>>>>>>> c71a839d45bf44c9a5a2636bba3421ff80390eed

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/Login" element={<Login />} />
<<<<<<< HEAD
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="fac/:facId" element={<Facility />} />
=======
          <Route path="/SignUp" element={<SignUp />} /> 
          <Route path="/" element={<Home />} />
>>>>>>> c71a839d45bf44c9a5a2636bba3421ff80390eed
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
