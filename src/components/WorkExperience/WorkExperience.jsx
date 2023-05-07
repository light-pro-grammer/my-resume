import { useState } from 'react';
import Workplace from './Workplace';
import AddWorkplaceForm from './AddWorkplaceForm';
import './WorkExperience.css';

const WorkExperience = () => {
  const [workplaces, setWorkplaces] = useState([
    {
      title: 'Software Developer',
      description: 'Developing web applications and APIs.',
      name: 'Tech Company',
      link: 'https://www.example.com',
    },
    {
      title: 'Data Analyst',
      description: 'Analyzing data and generating reports.',
      name: 'Data Company',
      link: 'https://www.example2.com',
    },
  ]);

  const addWorkplace = (newWorkplace) => {
    setWorkplaces([...workplaces, newWorkplace]);
  };

  return (
    <div className="work-experience container">
      <section>
        <h3>Summary</h3>
        <hr />
        <p>
          I'm a Software Engineer with 10 years of experience and all this time I've been helping businesses to reach
          their goals by using modern (and sometimes outdated) technologies. For this time I've been working in
          different technical sides of products and have experience with back-end (PHP), front-end (JS, TypeScript,
          React, Angular), and mobile (React Native).
        </p>
      </section>
      <section>
        <h3>Skills</h3>
        <hr />
        <div className="flex-container">
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Bootstrap</li>
          </ul>
          <ul>
            <li>React</li>
            <li>Redux</li>
            <li>React Native</li>
            <li>Ionic</li>
          </ul>
        </div>
      </section>
      <section>
        <h3>Education</h3>
        <hr />
        <div>
          <p>Dates of studying: from 2007 - to 2012</p>
          <p>Name of institution: Kyiv National Linguistic University</p>
          <p>Degree and major: Masters, Spanish Philology and Translation</p>
        </div>
      </section>
      <section>
        <h3>Work Experience</h3>
        <hr />
        {workplaces.map((workplace, index) => (
          <div className="row mb-3" key={index}>
            <Workplace {...workplace} />
          </div>
        ))}
        <AddWorkplaceForm onAdd={addWorkplace} />
      </section>
    </div>
  );
};

export default WorkExperience;
