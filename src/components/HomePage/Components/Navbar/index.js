import React, { Component } from 'react';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{background: '#fff!important'}}>
            <div className="container">
                <a className="navbar-brand brand-logo" style="font-weight: 700;" href="#"><span
                        className="hire-logo">hire</span><span className="script-logo">script</span></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    {/* <!-- <span className="navbar-toggler-icon"></span> --> */}
                    <i className="fa fa-bars"></i>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto nav justify-content-end custom_nav" style="width: 100%;">
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Jobs</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contests</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;