import React, { Component } from 'react'

const About = () => {
    return (
        <div className="section" style={{backgroundColor: '#f1f1f1'}}>
            <div>
                <div className="container">
                    <div className="pt-5 mt-5 image-content" style={{position: 'absolute'}}>
                        <h4 className="pt-5 mt-5 mb-0"><b>Welcome to</b></h4>
                        <h1 className="mt-0" style={{color: '#fff'}}>
                            <b><span className="title-hire">hire</span>script</b>
                        </h1>
                        <p className="font-40">Get Hired | Earn Better | Innovate Better</p>

                        <a href="#" className="bold font-40" style={{color: '#fff'}}>Browse Jobs</a>
                    </div>
                </div>
                <img src="upper.png" width="100%" alt="" />

                <div className="container pt-5 pb-4">
                    <h2 className="bold colorBlue">About</h2>
                    <p className="mt-4">With hirescript, we aim to help freshers to get more and more job opportunities. It
                        is a open-source software system by Developer Student Clubs
                        KIET powered by Google Developers. It's our values and our team that keep us motivated to come
                        up with better products.</p>
                </div>
            </div>
        </div>
    )
}

export default About;