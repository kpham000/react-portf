import React from 'react';
import './Home.css'
import image from '../Home/AvatarMaker.png'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="home">
           <div className="section menus">
               <Link className="active" to='/'><i className="fas fa-home "></i> Home </Link>
               <Link to='/about'><i className="fas fa-user "></i> About </Link>
               <Link to='/portfolio'><i className="fas fa-drafting-compass "></i> Portfolio </Link>
               <Link to='/contact'><i className="fas fa-map-marker-alt "></i> Contact </Link>
                
                <br />
                <div className="credit">
                    <small>Designed by <span className="designer">Kelly Pham</span></small> <br />
                    <small>Personal Website © 2021</small>
                </div>
           </div>
           <div className="section">
                <div className="image">
                    <img src={image} alt="user" />
                </div>
                <div className="details">
                    <h1>Kelly Pham</h1>
                    <p>Hello! I'm a full stack developer student at University of Washington coding bootcamp.  </p>
                </div>
           </div>
        </div>
    );
};

export default Home;