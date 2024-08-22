import React from 'react';
import { IoClose } from 'react-icons/io5';

export function CloseButton() {
  const handleClose = () => {
    if (window.top === window.self) {
      window.close();
      if (window.closed === false) {
        alert('창을 닫을 수 없습니다!');
      }
    } else {
      console.warn('새로운 창이 아니므로 닫을 수 없습니다!');
    }
  };

  return (
    <button
      onClick={handleClose}
      style={{ background: 'none', border: 'none', cursor: 'pointer' }}
    >
      <IoClose size={30} />
    </button>
  );
}
