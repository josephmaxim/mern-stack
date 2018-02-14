import React from 'react';
import 'whatwg-fetch';
import HomePage from './../components/home/HomePage';

export default class HomePageContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // State here
    };
  }


  render() {
    return (
      <div>
        <HomePage />
      </div>
    );
  }
}
