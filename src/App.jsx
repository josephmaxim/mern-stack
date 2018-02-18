import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import HomePageContainer from './containers/HomePageContainer';
import ProfilePageContainer from './containers/ProfilePageContainer';

export default function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={HomePageContainer} />
        <Route exact path="/user/:id" component={ProfilePageContainer} />
      </div>
    </Router>
  );
}
