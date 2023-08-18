import React, { useState } from "react";
import HomeContent from "./Home-content";
import "./Home.css";
export const data = [
  {
    id: 1,
    title: "ABOUT ME",
    describe: `
    I was medical technologist, 
    I have experience for 4 years. 
    Now I am learning about web developer with myself, 
    so I need experience for becoming web developer.
    `,
  },
  {
    id: 2,
    title: "EDUCATION",
    describe:
      " Bachelor of Science Program in Medical Technology, University of Phayao",
  },
  {
    id: 3,
    title: "CERTIFICATION",
    img: '/js-certification.png'
    
  }
];

const Home = () => {
  const [content, setContent] = useState(data);
  return (
    <main className="container">
      <div className="profile">
        <div className="name">
          <h5 className="fullname">Welcome to my Portfolio</h5>
          <h1 className="fullname">Hi! I'm CHARUNEE THANAWONG</h1>
        </div>

        <div className="skill">
          <h3 className="skill-title">SKILLS</h3>
          <ul className="grid-skill">
            <li className="grid-content">HTML</li>
            <li className="grid-content">CSS</li>
            <li className="grid-content">JAVASCRIPT</li>
            <li className="grid-content">REACT</li>
            <li className="grid-content">NODE.JS</li>
            <li className="grid-content">SQL</li>
            <li className="grid-content">GIT</li>
          </ul>
        </div>

        <div className="aboutme">
          <div className="aboutme-item">
            {content.map((x) => (
              <HomeContent key={x.id} {...x} />
            ))}
            {/* สร้าง prop */}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
