import React from "react";
import "./about-me.scss";
// import introImage from "../src/Images/aboutImg.jpg";
import hello from "../src/Images/hello.png";
import Technologies from "./Technologies";

const AboutMe = () => {
  return (
    <div className="main-container">
      <div className="writing-content">
        <h1>Hello, I'm Deepesh</h1>
        <h1>Full-Stack web developer</h1>
        <p>
          Hello! I'm a Full Stack Web Developer with two years of hands-on
          experience. My expertise lies in Ruby on Rails, ReactJs, JavaScript
          and GraphQL. I've successfully delivered projects showcasing my
          proficiency in both frontend and backend technologies. I'm passionate
          about clean code, efficient solutions, and staying ahead in the
          dynamic world of web development. Let's connect and discuss how my
          skills can contribute to your next project!
        </p>
      </div>
      <div className="image-content">
        <ime src={hello} alt="Description of the image" />
      </div>
      <div className="technologies-container">
        <Technologies />
      </div>
    </div>
  );
};

export default AboutMe;
