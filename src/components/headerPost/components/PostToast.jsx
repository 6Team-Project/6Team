import React, { useState, useEffect } from 'react';
import './PostToast.scss';
import completedIcon from '../../../assets/icon/ic_completed.svg';
import closeIcon from '../../../assets/icon/ic_close.svg';

const Toast = ({ message }) => {
  const [showToast, setShowToast] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowToast(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setShowToast(false);
  };

  return (
    <div className={`sharetoast ${showToast ? '' : 'hide'}`}>
      <div className='sharetoast__message'>
        <div className='sharetoast__message_left'>
          <img src={completedIcon} alt='URL 복사 성공' className='sharetoast__completed-icon' />
          <span className='sharetoast__completed-text'>{message}</span>
        </div>
        <img
          src={closeIcon}
          alt='닫기 아이콘'
          className='sharetoast__close-icon'
          onClick={handleClose}
          style={{ cursor: 'pointer' }}
        />
      </div>
    </div>
  );
};

export default Toast;
