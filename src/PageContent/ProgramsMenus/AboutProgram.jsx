import React from "react";
import "./programs.css";

const AboutProgram = ({
  image,
  title,
  description,
  description2,
  description3,
}) => {
  return (
    <section className="about-programme">
      <h2 className="innerpage-title">{title}</h2>
      <h3 className="innerpage-heading">About Program :</h3>
      <div className="about-pg-container">
        <div className="about-pg-img">
          <img src={image} alt={title} />
        </div>
        <div className="about-pg-content">
          <p>{description}</p>
        </div>
      </div>
      <p>{description2}</p>

      <h3 className="innerpage-heading">Importance of Program :</h3>
      <p>{description3}</p>
    </section>
  );
};

export default AboutProgram;
