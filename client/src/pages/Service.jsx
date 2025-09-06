import React from "react";
import "../pages/css/Service.css";

const Services = () => {
  return (
    <section className="services">
      <div className="services-container">
        {/* Header */}
        <div className="services-header">
          <div className="services-text">
            <h4>Fullstack UX UI Design Services</h4>
            <h1>
              Lightning fast <br />
              deliveries with laser <br />
              sharp precision.
            </h1>
          </div>
          <div className="services-desc">
            <p>
              To stand out in the crowded digital landscape and make a
              significant impact with your products, your creation deserves the
              skilled craftsmanship of a top-tier UX/UI design agency. Let us
              elevate your product with the excellence and innovation it
              warrants.
            </p>
            <button className="connect-btn">Let’s connect</button>
          </div>
        </div>

        {/* Services Cards */}
        <div className="services-grid">
          <div className="service-card purple">
            <h3>User Experience & Product Design</h3>
            <p>
              Enhance user interactions and product aesthetics for consumer apps,
              SaaS, and enterprise products.
            </p>
            <span className="arrow">→</span>
          </div>

          <div className="service-card green">
            <h3>User Research & Usability Testing</h3>
            <p>
              Gather insights to inform design decisions for diverse user groups
              with research and usability studies.
            </p>
            <span className="arrow">→</span>
          </div>

          <div className="service-card teal">
            <h3>Web and Visual Design</h3>
            <p>
              Create visually appealing and functional designs across platforms
              with a blend of aesthetics, motion, and adaptability.
            </p>
            <span className="arrow">→</span>
          </div>

          <div className="service-card yellow">
            <h3>Frontend Engineering</h3>
            <p>
              Get exactly what you see in mockups. Develop responsive and
              efficient user interfaces for web and mobile.
            </p>
            <span className="arrow">→</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
