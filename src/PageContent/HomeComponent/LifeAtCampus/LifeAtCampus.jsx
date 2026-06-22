import React from "react";
import "./LifeAtCampus.css";

const LifeAtCampus = () => {
  return (
    <section className="life-campus">
      {/* Title */}

      <div className="campus-content">
        {/* Left Side */}
        <div className="campus-left">
          <h2 className="title">MIT-ADT School of Food Technology</h2>
          <p>
            In 2006 with the vision to build talent and usher India ahead in the
            crucial food processing sector as per the guidelines of Maharashtra
            Council of Agricultural Education and Research, Pune (MCAER)
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            non mollis ex. Ut nec dictum risus. Cras aliquam felis viverra,
            ultricies nibh vitae, volutpat odio. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Vestibulum non mollis ex. Ut nec dictum
            risus. Cras aliquam felis viverra, ultricies nibh vitae, volutpat
            odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Vestibulum non mollis ex. Ut nec dictum risus. Cras aliquam felis
            viverra, ultricies nibh .. ....Read More
          </p>
          <ul className="page-list">
            <li>Modern Infrastructure & Smart Classrooms</li>
            <li>Advanced Food Technology Labs</li>
            <li>Sports & Cultural Activities</li>
            <li>Industry Interaction & Workshops</li>
            <li>Safe & Green Campus Environment</li>
          </ul>
          <button className="btn" id="campus-btn">
            Life At Campus
          </button>
        </div>

        {/* Right Side Image */}
        <div className="campus-image">
          <img src="/assets/images/home/banner1.jpg" alt="Campus Life" />
        </div>
      </div>
    </section>
  );
};

export default LifeAtCampus;
