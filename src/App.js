/* React Setup (React, React Router DOM) */
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
/* CSS Setup (Vanilla CSS, Bootstrap 5) */
import './App.css';
/* Linked */
import Navbar from './components/NavbarItems/Navbar';
import Footer from './components/FooterItem/Footer'
/* Page Linked */
import Home from './components/pages/home';
import News from './components/pages/news';
import Collection from './components/pages/collection';
import Test from './components/pages/test';
import Login from './components/pages/loginpage'



function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      
      <Switch>

        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/news">
          <News />
        </Route>

        <Route path="/collection">
          <Collection />
        </Route>

        <Route path="/test">
          <Test />
        </Route>

        <Route path="/loginpage">
          <Login />
        </Route>

      </Switch>

      <br />
      <br />
      <br />
      <Footer />
    </div>
    </Router>
  );
}

export default App;
