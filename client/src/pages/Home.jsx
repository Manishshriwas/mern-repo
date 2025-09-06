import React from "react";
import "../pages/css/Home.css"
import heroBg from "../assets/bg.jpg"
const Home = () => {
  return (
    <section
      className="home"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="overlay">
        <div className="hero-content">
          <h1>
            <span className="gradient-text">Let FANCY</span> <br />
            make concept <br /> for you
          </h1>
          <p>
            Get <span className="highlight">animated UI concept</span> for your
            landing page in a <span className="highlight">week</span>. <br />
            In 3 days we will come up with a static draft. <br />
            Another 2 days are for animation.
          </p>
          <button className="btn-start">Get Started</button>
        </div>
      </div>
    </section>
  );
};

export default Home;
