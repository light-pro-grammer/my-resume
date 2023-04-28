import React from 'react';
import './WorkExperience.css';

const WorkExperience = () => {
  return (
    <div className="work-experience">
      <h2>Work Experience</h2>
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
        <h3>Work Experience</h3>
        <hr />
        <p>
          <p>Name of employer: Ciklum, Vinnytsia</p>
          <br />
          <p>Dates of employment: 07/2021 - present</p>
          <br />
          <p>Job title: Senior Frontend Developer</p>
          <br />
          <p>
            Project/Role description: Project TUI (https://tui.co.uk). Front-end development (React, storeon, ES6,
            RollUp, SCSS, web components, micro frontend approach).
          </p>
          <br />
          <p>
            Development and supporting payment page for the biggest EU travel agency. Using a micro front-end approach
            to be able to integrate the solution in different products of the company
          </p>
        </p>
        <p>
          <p>Name of employer: Visme.co, remote, contract</p>
          <br />
          <p>Dates of employment: 09/2020 - 05/2022</p>
          <br />
          <p>Job title: Senior Software Engineer/Team Lead of Mobile department</p>
          <br />
          <p>
            Project/Role description: Developing a mobile application for visualization SaaS application: working with
            the team from all around the world I, as a senior engineer, took part in creating an application for the
            SaaS platform using React Native and reused up to 70% of the already existing codebase for business logic.
          </p>
          <br />
          <p>
            Leaded team of four people, my responsibilities in this role are onboarding, mentoring, prioritization, and
            allocation of tasks to team members load
          </p>
        </p>
      </section>
      <section>
        <h3>Education</h3>
        <hr />
        <p>
          <p>Dates of studying: from 2007 - to 2012</p>
          <br />
          <p>Name of institution: Kyiv National Linguistic University</p>
          <br />
          <p>Degree and major: Masters, Spanish Philology and Translation</p>
        </p>
      </section>
    </div>
  );
};

export default WorkExperience;
