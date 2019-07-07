import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import GithubContext from '../../context/github/githubContext';

const Search = props => {
  const [text, setText] = useState('');
  const githubContext = useContext(GithubContext);
  const { clearUsers, searchUsers, users } = githubContext;

  const handleChange = e => {
    setText(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (text === '') {
      setAlertMsg('Please type something', 'light');
    } else {
      searchUsers(text);
      setText('');
    }
  };

  const { setAlertMsg } = props;
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="text"
          placeholder="Github username..."
          onChange={handleChange}
          value={text}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        />
        {users.length > 0 && (
          <button className="btn btn-block" onClick={clearUsers}>
            Clear
          </button>
        )}
      </form>
    </div>
  );
};

Search.propTypes = {
  setAlertMsg: PropTypes.func.isRequired
};

export default Search;
