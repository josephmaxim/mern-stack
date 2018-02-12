import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './shared/Header';
import HomePage from './home/HomePage';
import ProfilePage from './account/ProfilePage';

export default function Template(props) {
  return (
    <Router>
      <div className="wrapper">
        {props.title}
        <Header />
        <div className="content">
          <Route exact path="/" component={HomePage} />
          <Route path="/user/:id" component={ProfilePage} />
        </div>
      </div>
    </Router>
  );
}
