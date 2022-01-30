import React from 'react';

export default function About() {
  return (
    <div className="aboutMe">
      <h2>About Me</h2>
      <img id="profile-img" src={require('../images/doom.png')} alt="profile"></img>
      <p className="aboutContent">
        I am an aspiring web and mobile app developer looking to expand and hone my skills by navigating through the industry in hopes of finding fun projects to work on either by myself, or a full team of developers. blah blah blah no 
      
      </p>
    </div>
  );
}
