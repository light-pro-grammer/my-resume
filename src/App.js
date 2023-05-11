import React from 'react';
import './App.css';
import profilePhoto from './images/profile-photo.png';
import ProfileImage from './components/ProfileImage';
import ContactInfo from './components/ContactInfo';
import WorkExperience from './components/WorkExperience/WorkExperience';
import Counter from './components/Counter';
import MyRepos from './components/MyRepos';

function App() {
  const username = 'light-pro-grammer';
  const token = process.env.REACT_APP_GITHUB_TOKEN;
  return (
    <div className="App">
      <header className="App-header">
        <div className="left-column">
          <ProfileImage imageSrc={profilePhoto} />
          <ContactInfo />
        </div>
        <WorkExperience />
      </header>
      <MyRepos username={username} token={token} />
      <Counter />
    </div>
  );
}

export default App;
