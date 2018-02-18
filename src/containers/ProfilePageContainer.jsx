import React from 'react';

import ProfilePage from './../components/user/ProfilePage';

export default class ProfilePageContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // init state here
    };
  }
  render() {
    return (
      <ProfilePage />
    );
  }
}
