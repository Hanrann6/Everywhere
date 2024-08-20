import { IoClose } from 'react-icons/io5';

export function CloseButton() {
  const handleClose = () => {
    if (window.top === window.self) {
      window.close();
    } else {
      console.warn('창을 닫을 수 없습니다!');
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
