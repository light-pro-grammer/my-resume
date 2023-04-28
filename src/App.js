import React from 'react';
import './App.css';
import profilePhoto from './images/profile-photo.png';
import ProfileImage from './components/ProfileImage';
import ContactInfo from './components/ContactInfo';
import WorkExperience from './components/WorkExperience';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="left-column">
          <ProfileImage imageSrc={profilePhoto} />
          <ContactInfo />
        </div>
        <WorkExperience />
      </header>
    </div>
  );
}

export default App;
