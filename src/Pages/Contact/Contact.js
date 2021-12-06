import React from "react";
import "./Contact.css";
import image from '../Home/AvatarMaker.png'
import { Link } from "react-router-dom";


const Contact = () => {
    return (
        <div className="home">
            <div className="section menus">
                <Link to="/">
                    <i className="fas fa-home "></i> Home{" "}
                </Link>
                <Link to="/about">
                    <i className="fas fa-user "></i> About{" "}
                </Link>
                <Link to="/portfolio">
                    <i className="fas fa-drafting-compass "></i> Portfolio{" "}
                </Link>
                <Link className="active" to="/contact">
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
            <div className="main">
                <img className="contact-img" src={image} alt="profile img"/>
                <h2>
                Contact
            </h2>
            <p>
                Github : 
                <a href="https://github.com/kpham000"> kpham000 </a>
            </p>
            <p>
                Phone : (123) 123-1234
            </p>
            <p>
                <a href="#">Email : kellycode211@gmail.com</a>
            </p>
            </div>
           
        </div>
    );
};

export default Contact;