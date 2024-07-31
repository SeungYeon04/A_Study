// src/profile/FrofileImage.js
import React from 'react';
import profileImage from '../프로필/앵무새.jpg';

const Profile = () => {
  return (
    <div>
      <img
        src={profileImage}
        alt="Profile"
        style={{ border: '1px solid gray', width: '150px', height: '150px', borderRadius: '40%' }} // 인라인 스타일 적용
      />
    </div>
  );
};

export default Profile;
