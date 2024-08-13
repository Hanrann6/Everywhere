import styled from 'styled-components';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import NavBar from '../components/NavBar';

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

export default Home;
