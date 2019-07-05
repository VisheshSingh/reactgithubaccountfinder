import React from 'react';
import PropTypes from 'prop-types';

const UserItem = props => {
  const { avatar_url, html_url, login } = props.user;
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
};

UserItem.propTypes = {
  users: PropTypes.array
};

export default UserItem;
