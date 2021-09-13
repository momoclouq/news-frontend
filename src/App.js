/* React Setup (React, React Router DOM) */
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
/* CSS Setup (Vanilla CSS, Bootstrap 5) */
import './App.css';
import './css/Test/QuizMain.css'
import 'bootstrap/dist/css/bootstrap.css'

/* Bootstrap 5 JavaScript */
import 'bootstrap/js/dist/collapse'
import 'bootstrap/js/dist/dropdown'




/* Linked */
import Navbar from './components/NavbarItems/Navbar';
import Footer from './components/FooterItem/Footer';
/* Page Linked */
import Home from './components/pages/home';
import News from './components/pages/news';
import CollectionList from './components/pages/CollectionList/CollectionList';
import QuizBase from './components/pages/Test/QuizBase';

import Login from './components/pages/loginpage'
import AboutUs from './components/pages/AboutUs/aboutus'
import TermOfService from './components/pages/TermOfService';




function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <Switch>

        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/News">
          <News />
        </Route>

        <Route path="/Collection">
          <CollectionList />
        </Route>

        <Route path="/Test">
          <QuizBase />
        </Route>

        <Route path="/loginpage">
          <Login />
        </Route>

        <Route path="/AboutUs">
          <AboutUs />
        </Route>
        <Route path="/TermOfService">
          <TermOfService />
        </Route>
      </Switch>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
