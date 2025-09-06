import React from "react";
import aboutImg from "../assets/bg.jpg"; // replace with your image
import "../pages/css/About.css";

const About = () => {
  return (
    <section className="about">
      <div className="about-container">
        {/* Header */}
        <div className="about-header">
          <div className="about-text">
            <h1>About Us</h1>
            <p>
              We are committed to creating a safe and supportive environment
              where you can explore your thoughts and feelings, develop coping
              strategies, and achieve your goals.
            </p>
          </div>
          <div className="about-image">
            <img src={aboutImg} alt="About Us" />
          </div>
        </div>

        {/* Stats Section */}
        <div className="about-stats">
          <div className="stat">
            <h2>1000+</h2>
            <p>Clients helped globally</p>
          </div>
          <div className="stat">
            <h2>200+</h2>
            <p>Licensed professionals</p>
          </div>
          <div className="stat">
            <h2>95%</h2>
            <p>Client satisfaction rate</p>
          </div>
          <div className="stat">
            <h2>15+</h2>
            <p>Years of experience</p>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="about-mission">
          <div className="mission-left">
            <h2>Empowering Global Mental Health Access</h2>
          </div>
          <div className="mission-right">
            <div className="box">
              <h4>OUR VISION</h4>
              <p>
                To be the leading platform, providing accessible, compassionate,
                and innovative care worldwide.
              </p>
            </div>
            <div className="box">
              <h4>OUR MISSION</h4>
              <p>
                To support individuals in achieving balance through tailored
                therapy and education, ensuring everyone has access to care.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
