import React, { Component } from 'react';

class UserItem extends Component {
  render() {
    const { avatar_url, html_url, login } = this.props.user;
    return (
      <div className="card text-center">
        <img
          src={avatar_url}
          alt="avatar"
          className="round-img"
          style={{ width: '60px' }}
        />
        <h3>{login}</h3>
        <div>
          <a href={html_url} className="btn btn-sm btn-dark">
            More
          </a>
        </div>
      </div>
    );
  }
}

export default UserItem;
