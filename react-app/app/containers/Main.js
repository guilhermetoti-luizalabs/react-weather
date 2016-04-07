import React, { Component } from 'react';
import NavBar from './NavBar';

import { styles } from '../styles';


export default class Main extends Component {
  render() {
    return (
      <div className='container-fluid'>
        <NavBar />

        <div className='row' style={styles.bodyContainer}>
          <div className='col-lg-12'>
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
};
