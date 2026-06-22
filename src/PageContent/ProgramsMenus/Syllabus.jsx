import React from "react";
import "./programs.css";

const Syllabus = ({
  title
}) => {
  return (
    <div>
      <h2 className="innerpage-title">{title}</h2>
      <h3 className="innerpage-heading">Syllabus:</h3>
      <div className="syllabus-section">
        <p>AY 2026: Download PDF</p>
        <button className="btn2">Syllbus</button>
      </div>
    </div>
  );
};

export default Syllabus;
