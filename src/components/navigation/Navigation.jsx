import React from 'react';
import { Link } from 'react-router-dom';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // your State
    };
  }
  render() {
    return (
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/user">User</Link></li>
        </ul>
      </div>
    );
  }
}
