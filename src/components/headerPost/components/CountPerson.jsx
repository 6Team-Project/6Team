import React from 'react';
import './CountPerson.scss';
import profileimg1 from '../../../assets/image/profile/img_profile_01.svg';
import profileimg2 from '../../../assets/image/profile/img_profile_02.svg';
import profileimg3 from '../../../assets/image/profile/img_profile_03.svg';

const profiles = [
  {
    id: 'profile1',
    src: profileimg1,
    alt: '이미지',
    createAt: '2024-05-01',
  },
  {
    id: 'profile2',
    src: profileimg2,
    alt: '이미지',
    createAt: '2024-05-05',
  },
  {
    id: 'profile3',
    src: profileimg2,
    alt: '이미지',
    createAt: '2024-04-01',
  },
  {
    id: 'profile4',
    src: profileimg3,
    alt: '이미지',
    createAt: '2024-04-28',
  },
];

export default function CountPerson() {
  const sortedProfiles = profiles.sort((a, b) => new Date(b.createAt) - new Date(a.createAt));
  const profileCount = sortedProfiles.length;

  return (
    <div className='headerPost__profile-container'>
      <div className='headerPost__profile-img'>
        {sortedProfiles.slice(0, 3).map((profile) => (
          <div key={profile.id}>
            <img src={profile.src} alt={profile.alt} className='headerPost__profile-size' />
          </div>
        ))}
        {profileCount > 3 && (
          <div className='headerPost__profile-restcount'>+{profileCount - 3}</div>
        )}
      </div>
      <div className='headerPost__profile-totalcount'>
        <span className='headerPost__profile-count'>{profileCount}</span>명이 작성했어요!
      </div>
    </div>
  );
}
