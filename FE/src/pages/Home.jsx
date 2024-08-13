import styled from 'styled-components';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import NavBar from '../components/NavBar';

const Home = props => {
  return (
    <div className="root">
      <NavBar></NavBar>
    </div>
  );
};

export default Home;
