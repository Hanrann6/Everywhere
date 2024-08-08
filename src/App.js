import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from 'react-router-dom';
//import Home from "./Home.js";
import Login from './pages/Login.jsx';
import SignUp from './pages/SignUp.jsx';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/" element={<SignUp />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
