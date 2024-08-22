import React from 'react';
import { useNavigate } from 'react-router';
import { IoClose } from 'react-icons/io5';

export function CloseButton() {
  const navigate = useNavigate();
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'end',
        width: '1154px',
        alignSelf: 'flex-end',
      }}
    >
      <button
        onClick={() => navigate(-1)}
        style={{ background: 'none', border: 'none', cursor: 'pointer' }}
      >
        <IoClose size={30} />
      </button>
    </div>
  );
}
