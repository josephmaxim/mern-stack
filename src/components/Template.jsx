import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from './shared/Navigation';
import HomePage from './home/HomePage';
import ProfilePage from './account/ProfilePage';
import LoginPage from './account/LoginPage';

export default function Template(props) {
  return (
    <Router>
      <div className="wrapper">
        {props.title}
        <Navigation />
        <div className="content">
          <Route exact path="/" component={HomePage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/user/:id" component={ProfilePage} />
        </div>
      </div>
    </Router>
  );
}
