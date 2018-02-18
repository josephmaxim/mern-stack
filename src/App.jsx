import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Components
import Navigation from './components/navigation/Navigation';

// Containers
import HomePageContainer from './containers/HomePageContainer';
import ProfilePageContainer from './containers/ProfilePageContainer';

export default function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Route exact path="/" component={HomePageContainer} />
        <Route path="/user" component={ProfilePageContainer} />
      </div>
    </Router>
  );
}
