import React, { Component } from 'react';
import Image from './Image';

import './UserProfile.css';

class UserProfile extends Component {
  render() {
    const { avatar, name, email } = this.props.user;
    return (
      <div className='container'>
        <Image source={avatar} alternativeText='User avatar' />
        <p>{name}</p>
        <p>{email}</p>
      </div>
    );
  }
}

export default UserProfile;
