import React from 'react';
import './ProfileImage.css';

const ProfileImage = (props) => {
  return <img className="profile-image" src={props.imageSrc} alt="Profile" style={{ width: '150px' }} />;
};

export default ProfileImage;
