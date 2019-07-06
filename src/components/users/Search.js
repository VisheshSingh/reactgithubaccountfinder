import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Search = props => {
  const [text, setText] = useState('');

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

  const { showClear, clearUsers, setAlertMsg, searchUsers } = props;
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
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  setAlertMsg: PropTypes.func.isRequired
};

export default Search;
