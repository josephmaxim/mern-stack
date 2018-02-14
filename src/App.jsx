import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import HomePageContainer from './containers/HomePageContainer';

export default function Template() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={HomePageContainer} />
      </div>
    </Router>
  );
}
