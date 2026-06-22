import React from "react";
import "./Programs.css";

const Programs = () => {
  const programData = [
    {
      image: "/assets/images/programs/B.Tech.jpg",
      title: "B. Tech. (Food Technology)",
    },
    {
      image: "/assets/images/programs/B.Tech2.jpg",
      title: "B. Tech. (Food Technology) Direct 2nd Year",
    },
    {
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72",
      title: "M. Tech. (Food Technology)",
    },
    {
      image: "https://images.unsplash.com/photo-1576086213369-97a306d36557",
      title: "M. Tech. (Food Safety & Quality Management)",
    },
    {
      image: "/assets/images/programs/P.hd.jpg",
      title: "Ph. D. (Food Technology)",
    }
  ];

  return (
    <section className="programs-section">
      <h2 className="title">Our Programs</h2>

      <div className="programs-slider">
        <div className="programs-track">
          {programData.concat(programData).map((program, index) => (
            <div className="program-cards" key={index}>
              <img src={program.image} alt={program.title} />
              <div className="pg-card">
                <h3 className="pg-title">{program.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;