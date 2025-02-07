import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Personal from './PersonalProfile';
import Work from './WorkExperience';
import Skills from './Skills';
import Education from './Education';
class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      personInfo:{ 
        name: "Amrit Madabushi",
        occupation : "Software Engineer"
      },
      contactInfo: {
        email: "amrit.madabushi@gmail.com",
        web: "https://amritm1015.github.io/resume-react/",
        mobile: "01234567890"
      },
      profile: {
        title: "Personal Profile",
        content: "Motivated and detail-oriented Computer Science student with strong problem-solving skills and a passion for developing efficient, user-friendly applications. Experienced in building React-based web applications and deploying them using GitHub Pages. Proficient in JavaScript, Python, and FastAPI, with a solid foundation in software development, version control (Git), and RESTful API design. Eager to contribute technical expertise, learn new technologies, and collaborate effectively in dynamic, team-oriented environments."
      },
      workExperience: {
        title: "Work Experience",
        job1: "Job Title at Company (August 2022 – December 2023)",
        job1content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        job2: "Job Title 2 at Company 2 (August 2020 – December 2021)",
        job2content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      },
      keySkills: {
        title: "Key Skills",
        content1: "Python",
        content2: "Java",
        content3: "AWS",
        content4: "Windows/Linux",
        content5:"Microsoft Office",
        content6: "Problem Solving",
        content7: "Communication & Teamwork",
        content8: "Adaptive"
      },
      education: {
 
      title:" Education",
        bsInstitution: "New Jersey Institute of Technology",
        bsDegree: "BS in Computer Science",
        bsDates: "2018-2025"
      }
    }
  }
  render() {
    return (
      console.log("App component is rendering..."),
      <div>
        <Header personInfo={this.state.personInfo} contactInfo={this.state.contactInfo}></Header>
        <Personal profile={this.state.profile}></Personal>
        <Work workExperience={this.state.workExperience}></Work>
        <Skills keySkills={this.state.keySkills}></Skills>
        <Education education={this.state.education}></Education>
      </div>
    );
  }
}
export default App;
