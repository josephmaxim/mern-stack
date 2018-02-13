import React from 'react';

export default class LoginPage extends React.Component {
  constructor() {
    super();
    this.state = {
      // test: '',
    };
  }
  render() {
    return (
      <div>
        <form>
          <input type="text" name="username" id="username" placeholder="username" />
          <input type="password" name="password" id="password" placeholder="password" />
          <button>Login</button>
        </form>
      </div>
    );
  }
}
