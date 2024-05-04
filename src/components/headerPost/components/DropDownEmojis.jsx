import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './DropDownEmojis.scss';
import arrowDownIcon from '../../../assets/icon/ic_arrow_down.svg';
import addicon from '../../../assets/icon/ic_add_20.svg';
import EmojiPicker from 'emoji-picker-react';

function DropDownEmojis() {
  const emojiSets = [
    { emoji: '🥹', count: 20 },
    { emoji: '🤩', count: 15 },
    { emoji: '😊', count: 10 },
    { emoji: '🤫', count: 3 },
    { emoji: '🤫', count: 25 },
    { emoji: '🤫', count: 9 },
    { emoji: '😎', count: 30 },
    { emoji: '🥰', count: 24 },
    { emoji: '🥰', count: 27 },
    { emoji: '🥰', count: 5 },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [maxIcons, setMaxIcons] = useState(6);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const toggleDropDown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setWindowWidth(width);
      if (width < 1200) {
        setMaxIcons(6);
      } else {
        setMaxIcons(8);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const topEmojis = emojiSets
    .slice(0)
    .sort((a, b) => b.count - a.count)
    .slice(0, 3);

  const [showPicker, setShowPicker] = useState(false);

  const handleEmojiClick = (emojiData, event) => {
    console.log('Selected emoji data:', emojiData);
    console.log('Selected emoji ID:', emojiData.unified);
    console.log('Selected emoji character:', emojiData.emoji);
  };

  const togglePicker = () => {
    setShowPicker((prevState) => !prevState);
  };

  return (
    <div>
      <div className='headerPost__addition-emojis-container'>
        <div className='headerPost__dropdown-emojis-container'>
          <button className='headerPost__dropdown-button'>
            <div className='headerPost__popularemoji'>
              {topEmojis.map((set, index) => (
                <span key={index} className='headerPost__emoji'>
                  {set.emoji}
                  {set.count}
                </span>
              ))}
            </div>
            <img
              src={arrowDownIcon}
              alt='Dropdown'
              className='headerPost__dropdown-icon'
              onClick={toggleDropDown}
            />
          </button>

          {isOpen && (
            <div className='headerPost__emoji-dropdown-menu'>
              {emojiSets
                .slice(0)
                .sort((a, b) => b.count - a.count)
                .slice(0, maxIcons)
                .map((set, index) => (
                  <div key={index} className='headerPost__emoji-dropdown'>
                    <span>{set.emoji}</span>
                    <span>{set.count}</span>
                  </div>
                ))}
            </div>
          )}
        </div>
        <div>
          <button className='headerPost__emoji-add-btn' onClick={togglePicker}>
            <img src={addicon} className='headerPost__add-btn' alt='이모지추가' />
            <span
              className='headerPost__post-text'
              style={{ display: windowWidth >= 768 ? 'inline' : 'none' }}>
              추가
            </span>
          </button>
        </div>
      </div>
      {showPicker && <EmojiPicker onEmojiClick={handleEmojiClick} />}
    </div>
  );
}

export default DropDownEmojis;
