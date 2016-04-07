import React, { Component, PropTypes } from 'react';

const { object } = PropTypes;


export default class SearchBox extends Component {
  static contextTypes = {
    router: object.isRequired
  };

  state = {
    'search': ''
  };

  handleChange = (event) => {
    const value = event.target.value;

    this.setState({
      'search': value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const search = this.state.search;

    this.setState({
      'search': ''
    });

    if(search) {
      this.context.router.push({
        pathname: '/weather/' + search,
        state: {searchParam: search}
      });
    }
  }

  render() {
    return (
      <form className='navbar-form navbar-right' role='search' onSubmit={this.handleSubmit}>
        <div className='input-group'>
          <input type='text' className='form-control' placeholder='São Paulo, SP' value={this.state.search} onChange={this.handleChange} />
          <span className='input-group-btn'>
            <button type='submit' className='btn btn-success'>Check</button>
          </span>
        </div>
      </form>
    )
  }
}
