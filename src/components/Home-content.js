import React, { useState } from "react";
import "./Home.css";
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";

//รับ prop มาใช้
const Homecontent = ({ title, describe, img }) => {
  const [showContent, setShowContent] = useState(false);
  return (
    <div className="content">
      <h3>
        <button className='btn-titile' onClick={() => setShowContent(!showContent)}>{title}</button>
        <button className="btn" onClick={() => setShowContent(!showContent)}>
          {showContent ? <IoIosArrowDropup /> : <IoIosArrowDropdown />}
        </button>
      </h3>
      {showContent && <p className="describe">{describe} </p>}
      {showContent && <img src={img} className="img-cer"/>}
    </div>
  );
};

export default Homecontent;
