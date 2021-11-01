import React from "react";
import Profile from "./components/Profile";
import {AiFillHome} from "react-icons/ai"
import {MdMapsHomeWork} from "react-icons/md"
import{GiSkills}from "react-icons/gi" 



import{FaUniversity} from "react-icons/fa"

import "./App.css";

const App = () => {
  return (
    <div className="cirds">
      <div className="Profile">
        <Profile/>
      </div>
      <div className="texts">
        <h1 className="headrcirds" ><AiFillHome/>  ABOUT</h1>
        <hr />
        <p>
          Over the past 20 years I have continuously challenged myself with new
          languages, frameworks and methodologies. My core languages have always
          been html, css & javascript but I have also worked as a full stack php
          developer building both bespoke CMS solutions and small business
          applications. My current role at IAG is Senior Front End Developer (or
          Senior Software Engineer as IAG prefer to label us) and have been
          developing with React and Redux for the past 4 years.
        </p>

        <h1 className="headrcirds"> <MdMapsHomeWork/>WORK EXPERIENCE</h1>
        <hr />
        <h5>Senior Front End Developer, IAG</h5>
        <p>
          I am currently working as a senior front end developer on IAG's Chroma
          Design System team, however as there are only two developers on the
          team we have also been required to setup CI/CD workflows in Circle
          CI/Github Actions as well as hosting environments in AWS. I have had
          experience setting up deployments to S3 via the AWS CLI from Github
          Actions and setting up CloudFront, Route 53 and simple Lambda
          functions. I have also been responsible for creating and maintaining
          components both in our Core product which is html/scss and our React
          npm package which is consumed by the app development teams and setting
          up testing and documentation across the design system. I have had
          experience working on multiple applications at IAG that have been
          built or are being built using React/Redux running on top of a Node
          Express Server and interfacing with an API backend architecture to
          access the various IAG systems. We are always striving to increase the
          quality of our projects with good test coverage and code reviews.
        </p>
        <h5>Senior Front End Developer, Pacific Magazines</h5>
        <p>
          During my time at Pacific Magazines I worked on a couple of large
          React applications using React/Redux to integrate with a .NET MVC
          Application.
        </p>
        <h5>UI Developer, IAG</h5>
        <p>
          Working as a UI developer as part of IAG Labs developing
          html/css/javascript solutions to integrate with the backend systems
          for the online quoting applications.
        </p>
        <h5>Front End Developer, Reactive</h5>
        <p>
          At Reactive I was responsible for working with a .NET team to deliver
          templates using javascript/sass/grunt and handlebars. I also had
          exposure to TFS for source control.
        </p>
        <h5>Front End Developer, City of Sydney Council</h5>
        <p>
          For City of Sydney I was a Front End Developer working with Wordpress
          on multiple key websites such as Sydneynewyearseve.com.au. All code
          was developed using LESS and Bootstrap for a consistent responsive
          interface.
        </p>
        <h5>Freelance Web Developer, Self Employed</h5>
        <p>
          As a freelance web developer I mainly concentrated on building bespoke
          CMS solutions for agencies using Wordpress. As a full stack developer
          my responsibilities included setting up hosting, domains, databases
          and delivering an easy to use custom Wordpress theme with Advanced
          Custom Fields and toward the latter end of my freelance venture,
          responsive layouts.
        </p>
        <h5>Senior Web Developer, Soap Creative</h5>
        <p>
          At SOAP I was required to carry out full stack duties across a broad
          range of projects including php/MySQL with front end technologies
          ranging from html/css to Flash.
        </p>
        <h5>Web Developer, M&C Saatchi</h5>
        <p>Flash development with xml & amfphp for php/mysql integration</p>
        <h5>Web Developer, Wunderman/GPY&R</h5>
        <p>
          Flash developer using xml & amfphp, html/css with php/mysql backend
          integration and CMS development.
        </p>
        <h5>Web Developer, Federal Publishing Company</h5>
        <p>
          Lead web developer on homehound.com.au, html/css/javascript
          development with php & SQL server integration.
        </p>
        <h1 className="headrcirds"> <GiSkills/>SKILLS</h1>

        <hr />
        <ul className="skills-list">
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>ES2015</li>
          <li>ES2016</li>
          <li>ES2017</li>
          <li>ES2018</li>
          <li>ES2019</li>
          <li>ES6</li>
          <li>React</li>
          <li>jQuery</li>
          <li>SASS</li>
          <li>LESS</li>
          <li>AWS</li>
          <li>Github</li>
          <li>Webpack</li>
          <li>Handlebars</li>
          <li>Gulp</li>
          <li>Grunt</li>
          <li>Babel</li>
          <li>CircleCI</li>
          <li>TravisCI</li>
          <li>Heroku</li>
          <li>CI</li>
          <li>CD</li>
          <li>Bootstrap</li>
          <li>Node</li>
          <li>php</li>
          <li>MySQL</li>
          <li>Git</li>
          <li>Jira</li>
          <li>Responsive</li>
        </ul>
        <h1 className="headrcirds"><FaUniversity/> EDUCATION</h1>
        <hr />

        <h5>Bachelor (hons) Music</h5>
        <h5>Birmingham Conservatoire</h5>
        <p>
          <strong>Studied: 08/1994 - 07/1998</strong>
        </p>
      </div>
    </div>
  );
};
export default App;
