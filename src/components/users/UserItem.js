import React, { Component } from 'react';

class UserItem extends Component {
  state = {
    id: '1',
    login: 'mojombo',
    avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
    html_url: 'https://github.com/mojombo'
  };
  render() {
    return (
      <div className="card text-center">
        <img
          src={this.state.avatar_url}
          alt="avatar"
          className="round-img"
          style={{ width: '60px' }}
        />
        <h3>{this.state.login}</h3>
        <div>
          <a href={this.state.html_url} className="btn btn-sm btn-dark">
            More
          </a>
        </div>
      </div>
    );
  }
}

export default UserItem;
