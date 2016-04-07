import React, { Component } from 'react';
import SearchBox from '../containers/SearchBox';


export default class NavBar extends Component {
  render() {
    return (
      <nav className='navbar navbar-default navbar-fixed-top'>
        <div className='container-fluid'>
          <div className='navbar-header'>
            <a className='navbar-brand' href='#'>React Weather</a>
          </div>
          <SearchBox />
        </div>
      </nav>
    )
  }
}
