import React, { Component } from 'react';
import Spinner from '../layout/Spinner';

class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
  }

  render() {
    const {
      name,
      avatar_url,
      loacation,
      bio,
      blog,
      login,
      html_url,
      followers,
      following,
      pubic_gists,
      public_repos,
      hireable
    } = this.props.user;
    // console.log(this.props);

    const { loading } = this.props;
    if (loading) {
      return <Spinner />;
    }
    return <div>{name}</div>;
  }
}

export default User;
