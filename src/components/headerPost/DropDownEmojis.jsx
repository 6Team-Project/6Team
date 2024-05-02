import React, { useState, useEffect } from 'react';
import '../../styles/headerPost/DropDownEmojis.scss';
import arrowDownIcon from '../../assets/icon/ic_arrow_down.svg';

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
  const [maxIcons, setMaxIcons] = useState(6); // Default max icons to show

  const toggleDropDown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1200) {
        setMaxIcons(6);
      } else {
        setMaxIcons(8);
      }
    };

    window.addEventListener('resize', handleResize);

    // Cleanup function
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Run only once on component mount

  const topEmojis = emojiSets
    .slice(0)
    .sort((a, b) => b.count - a.count)
    .slice(0, 3); // Top 3 emojis

  return (
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
  );
}

export default DropDownEmojis;
