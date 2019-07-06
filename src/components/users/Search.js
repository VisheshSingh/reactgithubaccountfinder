import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import GithubContext from '../../context/github/githubContext';

const Search = props => {
  const [text, setText] = useState('');
  const githubContext = useContext(GithubContext);

  const handleChange = e => {
    setText(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (text === '') {
      setAlertMsg('Please type something', 'light');
    } else {
      githubContext.searchUsers(text);
      setText('');
    }
  };

  const { showClear, clearUsers, setAlertMsg } = props;
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
        {showClear && (
          <button className="btn btn-block" onClick={clearUsers}>
            Clear
          </button>
        )}
      </form>
    </div>
  );
};

Search.propTypes = {
  clearUsers: PropTypes.func.isRequired,
  setAlertMsg: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired
};

export default Search;
