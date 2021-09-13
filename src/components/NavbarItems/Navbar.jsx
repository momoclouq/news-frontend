/* React Setup (React, React Router DOM) */
import React from 'react';
import { NavLink, Link } from 'react-router-dom'
/* CSS Setup (Vanilla CSS, Bootstrap 5) */
import './Navbar.css'

/* Image */
import profileImage from '../../images/1.png'

/* Image */
import logo from '../../logo.svg'

/* FontAwesome Setup */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBell, faCog, faQuestionCircle, faSearch, faSignInAlt, faSignOutAlt, faUserCircle } from '@fortawesome/free-solid-svg-icons'

library.add(faBell, faSearch, faSignInAlt, faSignOutAlt, faCog, faUserCircle, faQuestionCircle)



function Navbar() {
    return (

        <div id="Navbar" className="navbar-dark bg-dark shadow">
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <div className="d-flex align-items-center ">
                        {/* Logo */}
                        <Link to="/" className="navbar-brand"> <img src={logo} alt="logo" width="40px" height="25px" /> React</Link>
                        {/* Search */}
                        <div className="navbar navbar-nav">
                            <div className="container-fluid">
                                <form className="d-flex input-group w-auto">
                                    <input
                                        type="search"
                                        className="form-control rounded"
                                        placeholder="Search"
                                        aria-label="Search"
                                        aria-describedby="search-addon"
                                    />
                                    <span className="input-group-text text-white border-0" id="search-addon">
                                        <FontAwesomeIcon icon={faSearch} style={{cursor: "pointer"}}/>
                                    </span>
                                </form>
                            </div>
                        </div>
                    </div>
                    <button 
                            className="navbar-toggler navbar-toggler-left" 
                            type="button" 
                            data-bs-toggle="collapse" 
                            data-bs-target="#toggleMobileMenu" 
                            aria-controls="toggleMobileMenu" 
                            aria-expanded="false" 
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                    </button>
                        
                        
                                                            
                        
                    <div className="collapse navbar-collapse px-3" id="toggleMobileMenu">
                        {/* Left Link */}
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                            <li className="nav-item">
                                <NavLink exact to="/" className="nav-link px-2" activeClassName="text-light">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact to="/news" className="nav-link px-2" activeClassName="text-light">News</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact to="/collection" className="nav-link px-2" activeClassName="text-light">Collection</NavLink>
                            </li>
                            <li className="nav-item ml-2">
                                <NavLink to="/test" className="nav-link px-2" activeClassName="text-light">Test</NavLink>
                            </li>
                        </ul>

                        {/* Right Link */}
                        <div className="button-group">
                            <Link to="/loginpage"><button type="button" className="btn text-light"> <FontAwesomeIcon icon={faSignInAlt} /> Login/Sign up</button></Link>
                            {/* After logged */}
                            {/* <div className="btn-group">
                                <Link to="#" className="dropdown-toggle text-decoration-none text-light" data-bs-toggle="dropdown" id="dropdownProfile">
                                    <img src={profileImage} alt={profileImage} className="rounded-circle" height={50} />
                                    <span>Gurdeep Singh</span>
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="dropdownProfile">
                                    <li><Link to="#" className="dropdown-item"><FontAwesomeIcon icon={faUserCircle} /> Profile</Link></li>
                                    <li><Link to="#" className="dropdown-item"><FontAwesomeIcon icon={faCog} /> Settings</Link></li>
                                    <li><Link to="#" className="dropdown-item"><FontAwesomeIcon icon={faQuestionCircle} /> Help & Support</Link></li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li><Link href="#" className="dropdown-item"> <FontAwesomeIcon icon={faSignOutAlt} /> Sign out</Link></li>
                                </ul>
                            </div> */}
                        </div>
                    </div>        
                </div>
            </nav>
                
            
        </div>

        

            
    );
}

 
export default Navbar;