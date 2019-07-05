import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserItem = props => {
  const { avatar_url, login } = props.user;
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
        <Link to={`/user/${login}`} className="btn btn-sm btn-dark">
          More
        </Link>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  users: PropTypes.array
};

export default UserItem;
