import React from "react";
import "./programs.css";

const Eligibility = ({ title, description, list }) => {
  return (
    <div>
      <h2 className="innerpage-title">{title}</h2>

      <div className="eligibility-container">
        <h3 className="innerpage-heading">Eligibility Criteria:</h3>
        <p>{description}</p>

        <div className="row-lists">
          <div>
            <h4 className="sub-heading">Specific Requirement</h4>
            <ul className="page-list">
              {list?.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="sub-heading">Download PDF (AY 2026-27)</h4>
            <div className="eligibility-btns">
              <button className="btn">Admission Handbook</button>
              <button className="btn2"> Brochure</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eligibility;
