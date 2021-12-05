import React from "react";
import "./About.css";
import { Link } from "react-router-dom";


const About = () => {
    return (
        <div className="home about">
            <div className="section menus">
                <Link to="/">
                    <i className="fas fa-home "></i> Home{" "}
                </Link>
                <Link className="active" to="/about">
                    <i className="fas fa-user "></i> About{" "}
                </Link>
                <Link to="/portfolio">
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
            <div className="about-container">
                {/* <img className="about-image" src={img} alt="" /> */}
                <div className="container">
                    <div className="details">
                        <h2 className="about-title">
                            About <span className="name">Kelly </span>
                        </h2>
                        <p>
                            <span>Dreamer</span> | <span>Learner</span> |{" "}
                            <span>Adventurer</span>
                        </p>
                        <hr />
                        <p>
                            Hello! Welcome to personal portfolio. I'm a full stack developer student. I've learn skills
                            in HTML5,CSS3,Javascript, React, Node, Express, MongoDB,
                            and others.{" "}
                        </p>
                        <h3 className="link">
                            <a className="resume" href="#">
                                VIEW MY RESUME
                            </a>
                        </h3>
                    </div>
                    <div className="about-me">
                        <div className="title">
                            <p>Name: </p>
                            <p>Github: </p>
                            <p>Email: </p>
                        </div>
                        <div className="title-value">
                            <p className="value">Kelly Pham </p>
                            <p className="value">kpham000 </p>
                            <p className="value">kellycode211@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;