import React from 'react';
import { Link } from 'react-router-dom';

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // text: true,
    };
  }
  render() {
    return (
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/user/dwadwad">Profile</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </div>
    );
  }
}
