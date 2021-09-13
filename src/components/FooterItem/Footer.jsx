/* React Setup (React, React Router DOM) */
import React from 'react';
import { Link } from 'react-router-dom'


/* FontAwesome Setup */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faFacebook, faGooglePlus, faInstagram, faLinkedinIn, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faHome, faPhone, faPrint } from '@fortawesome/free-solid-svg-icons'

library.add(faHome, faEnvelope, faPhone, faPrint)
library.add(fab, faFacebook, faTwitter, faGooglePlus, faYoutube, faLinkedinIn, faInstagram)

function Footer(){
    return(
        <footer className="bg-dark text-light pt-5 pb-4">
            <div className="container text-md-left">
                <div className="row text-md-left">

                    <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 font-weight-bold text-info">About</h5>
                        <hr className="mb-4" />
                        {/* Put web text here */}
                        <p>
                            This is a about website text

                        </p>

                    </div>

                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 font-weight-bold text-info">Let Us Help</h5>
                        <hr className="mb-4" />
                        <p>
                            <a href="/" className="text-light" style={{textDecoration: "none"}}>Your Account</a>
                        </p>
                        <p>
                            <a href="/" className="text-light" style={{textDecoration: "none"}}>News Notification</a>
                        </p>
                        <p>
                            <a href="/" className="text-light" style={{textDecoration: "none"}}>Manage Your Content and Device</a>
                        </p>
                        <p>
                            <a href="/" className="text-light" style={{textDecoration: "none"}}>Help</a>
                        </p>
                    </div>

                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 font-weight-bold text-info">Let Us Help</h5>
                        <hr className="mb-4" />
                        <p>
                            <Link to="/AboutUs" className="text-light" style={{textDecoration: "none"}}>About Us</Link>
                        </p>
                        <p>
                            <Link to="/TermOfService" className="text-light" style={{textDecoration: "none"}}>Term of Service</Link>
                        </p>
                        <p>
                            <a href="/" className="text-light" style={{textDecoration: "none"}}>Manage Your Content and Device</a>
                        </p>
                        <p>
                            <a href="/" className="text-light" style={{textDecoration: "none"}}>Help</a>
                        </p>
                    </div>

                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 font-weight-bold text-info">Contact</h5>
                        <hr className="mb-4" />
                        <p>
                            <FontAwesomeIcon icon={faHome} className="mr-3" style={{marginRight: "8px"}} /> Address
                        </p>
                        <p>
                            <FontAwesomeIcon icon={faEnvelope} className="mr-3" style={{marginRight: "8px"}} /> Mail
                        </p>
                        <p>
                            <FontAwesomeIcon icon={faPhone} className="mr-3" style={{marginRight: "8px"}} /> Phone Num
                        </p>
                        <p>
                            <FontAwesomeIcon icon={faPrint} className="mr-3" style={{marginRight: "8px"}} /> Print Num
                        </p>                       
                    </div>
                </div>
                
                <hr className="mb-4" />
                <div className="row d-flex justify-content-center text-center">
                    <div>
                        <p>
                            &#169; Copyright 2021 All Rights Reserved By: 
                            <a href="/" style={{textDecoration: "none"}}>
                                <strong className="text-info"> Web Name</strong>
                            </a>
                        </p>
                    </div>
                </div>

                <div className="row d-flex justify-content-center">
                    <div className="text-center">
                        <ul className="list-unstyled list-inline">
                            <li className="list-inline-item">
                                <a href="/" className="text-light"><FontAwesomeIcon icon={faFacebook} /></a>
                            </li>
                            <li className="list-inline-item">
                                <a href="/" className="text-light"><FontAwesomeIcon icon={faTwitter} /></a>
                            </li>
                            <li className="list-inline-item">
                                <a href="/" className="text-light"><FontAwesomeIcon icon={faGooglePlus} /></a>
                            </li>
                            <li className="list-inline-item">
                                <a href="/" className="text-light"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                            </li>
                            <li className="list-inline-item">
                                <a href="/" className="text-light"><FontAwesomeIcon icon={faYoutube} /></a>
                            </li>
                            <li className="list-inline-item">
                                <a href="/" className="text-light"><FontAwesomeIcon icon={faInstagram} /></a>
                            </li>
                        </ul>
                    </div>
                </div>
                
            </div>

        </footer>
    )
}

export default Footer