import React, { Component } from 'react';
import PropTypes from 'prop-types';
class Search extends Component {
  state = {
    text: ''
  };

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.searchUsers(this.state.text);
    this.setState({
      text: ''
    });
  };

  render() {
    return (
      <div>
        <form className="form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="text"
            placeholder="Github username..."
            onChange={this.handleChange}
            value={this.state.text}
          />
          <input
            type="submit"
            value="Search"
            className="btn btn-dark btn-block"
          />
          {this.props.showClear && (
            <button className="btn btn-block" onClick={this.props.clearUsers}>
              Clear
            </button>
          )}
        </form>
      </div>
    );
  }
}

export default Search;
