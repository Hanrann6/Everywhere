import styled from 'styled-components';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import NavBar from '../components/NavBar';

<<<<<<< HEAD
function Home() {
  /*
  const navigate = useNavigate();
  
  function goToLogin() {
  
  }
  */

  return (
    <div className="root">
      <NavBar />
    </div>
  );
}
=======
const Home = props => {
  return (
    <div className="root">
      <NavBar></NavBar>
    </div>
  );
};
>>>>>>> d1fccbd5110065af40a3caf7bd8f621ea9924300

export default Home;
