import React from "react";
import "./Portfolio.css";
import image1 from '../Portfolio/weather-dash-page.png'
import image2 from '../Portfolio/proj1-thirsty-thursday.png'
import image3 from '../Portfolio/fitness-tracker-dash.png'
import image4 from '../Portfolio/budget-tracker-screenshot.png'
import { Link } from "react-router-dom";

const Portfolio = () => {
  return (
    <div className="home portfolio">
      <div className="section menus">
        <Link to="/">
          <i className="fas fa-home "></i> Home{" "}
        </Link>
        <Link to="/about">
          <i className="fas fa-user "></i> About{" "}
        </Link>
        <Link className="active" to="/portfolio">
          <i className="fas fa-drafting-compass "></i> Portfolio{" "}
        </Link>
        <Link to="/contact">
          <i className="fas fa-map-marker-alt "></i> Contact{" "}
        </Link>

        <br />
        <div className="credit">
          <small>
            Designed by <span className="designer">Kelly Pham</span>
          </small>{" "}
          <br />
          <small>Personal Website © 2021</small>
        </div>
      </div>

      <div className="section">

        <div className="sub-section">
          <h1>Portfolio</h1>
            <div className="item-container">
              <a href="https://kpham000.github.io/weather-dashboard/">
                <img src= {image1} alt="weather dashboard" />
                </a>
              <a href="https://chuckdvchek.github.io/thirsty-thursdays/">
                <img src={image2} alt="thirsty-thursday" />
                </a>
            </div>
            <div className="item-container">
              <a href="https://workout-tracker-aa.herokuapp.com/">
                <img src={image3} alt="fitness tracker" />
                </a>
              <a href="https://budget-tracker-bu.herokuapp.com/">
                <img src= {image4} alt="budget tracker" />
                </a>
            </div>
        </div>
        
      </div>
    </div>
  );
};

export default Portfolio;