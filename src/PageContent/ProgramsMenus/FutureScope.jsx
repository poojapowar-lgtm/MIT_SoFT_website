import React from "react";
import "./programs.css";

const FutureScope = ({ title, description, description2, list, list2 }) => {
  return (
    <div>
      <div className="future-container">
        <h2 className="innerpage-title">{title}</h2>
        <h3 className="innerpage-heading">Future Scope & Importance:</h3>
        <p>{description}</p>
        <div className="row-lists">
          <div>
            <h3 className="innerpage-heading">
              Graduates are highly employable in:
            </h3>
            <ul className="page-list">
              {list?.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="innerpage-heading">Common Job Positions:</h3>
            <ul className="page-list">
              {list2?.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <h3 className="innerpage-heading">Placement Prospects:</h3>
        <p>{description2}</p>
      </div>
    </div>
  );
};

export default FutureScope;
