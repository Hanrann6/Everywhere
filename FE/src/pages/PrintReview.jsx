import React, { useState } from 'react';
import { NavBar } from '../components';
import * as R from '../components/Review/Review';

function PrintReview() {
  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'row wrap',
      }}
    >
      <NavBar />
      <R.Review></R.Review>
    </div>
  );
}
export default PrintReview;
