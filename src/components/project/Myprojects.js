import React from "react";
import { Link } from "react-router-dom";
import "./Myproject.css";

const Myprojects = () => {
  return (
    <div className="project-container">
      <h1 className="title">MY PROJECTS</h1>
      <div class="flexbox">
        <div class="item">
          <div class="content-project">
            <Link to="/myprojects/quiz" className="link">
              QUIZ
            </Link>
          </div>
        </div>
        <div class="item">
          <div class="content-project">
            <Link to="/myprojects/todolist" className="link">
              Todo List
            </Link>
          </div>
        </div>
        <div class="item">
          <div class="content-project">
            <Link to="/myprojects/imagesearch" className="link">
              Image Search
            </Link>
          </div>
        </div>
          <div class="item">
            <div class="content-project">
              <Link to="/myprojects/connectbackend" className="link">
                Project Connect Backend
              </Link>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Myprojects;
