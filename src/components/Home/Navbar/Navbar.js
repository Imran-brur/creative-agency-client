import React from 'react';
import { Link } from 'react-router-dom';
import logo from'../../../images/logos/logo.png';
const Navbar = () => {
    return (
            <nav className=" navbar navbar-expand-lg navbar-light">
                <img style={{ width: "100px"}} src={logo} alt=""/>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <Link className="nav-link mr-5" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link mr-5" to="/ourPortfolio">Our Portfolio</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link mr-5" to="/ourTeam">Our Team</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link mr-5" to="#">Contact Us</Link>
                    </li>
                </ul>

                <button className="btn btn-dark">Log in</button>
            </div>
            </nav>
       
    );
};

export default Navbar;