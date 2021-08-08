/* React Setup (React, React Router DOM) */
import React from 'react';
import { Link } from 'react-router-dom'
/* CSS Setup (Vanilla CSS, Bootstrap 5) */
import './Navbar.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/js/dist/collapse'
import 'bootstrap/js/dist/dropdown'

/* Image */
import logo from '../../logo.svg'

/* FontAwesome Setup */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBell, faSearch } from '@fortawesome/free-solid-svg-icons'

library.add(faBell, faSearch)



function Navbar() {
    return (

        <div className="navbar-dark bg-dark shadow">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <nav className="navbar navbar-expand-lg">
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
                                
                                <div className="d-flex align-items-center">
                                    <Link to="/loginpage"><button type="button" className="btn btn-link px-3 me-2">Login</button></Link>
                                    <Link to="/"><button type="button" className="btn btn-primary me-3">Sign up for free</button></Link>
                                </div>
                            </div>
                        </nav>
                    </div>


                    <div className="col-md-12">
                        <nav className="navbar navbar-expand-lg">
                            <div className="container-fluid">
                                <Link to="/" className="navbar-brand"> <img src={logo} alt="logo" width="40px" height="25px" /> React</Link>

                                <button 
                                    className="navbar-toggler" 
                                    type="button" 
                                    data-bs-toggle="collapse" 
                                    data-bs-target="#toggleMobileMenu" 
                                    aria-controls="toggleMobileMenu" 
                                    aria-expanded="false" 
                                    aria-label="Toggle navigation"
                                >
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                                                    
                                {/* Left Link */}
                                <div className="collapse navbar-collapse" id="toggleMobileMenu">
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <Link to="/" className="nav-link active">Home</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/news" className="nav-link">News</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/collection" className="nav-link">Collection</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/test" className="nav-link">Test</Link>
                                        </li>
                                    </ul>
                                </div>    
                            </div>
                        </nav>

                
                    </div>
                </div>
            </div>
        </div>

            
    );
}

 
export default Navbar;