import React, { Component, PropTypes } from 'react';
import ReactRouter, { Link } from 'react-router';

const { object } = PropTypes;

import Weather from '../components/Weather';


export default class Detail extends Component {
  static contextTypes = {
    router: object.isRequired
  };

  state = {
    data: this.props.location.state.weather,
    city: this.props.routeParams.search
  };

  render() {
    return (
      <div>
        <h1>{this.state.city}</h1>
        <Link
          to={`/weather/${this.state.city}`}>
          Back
        </Link>

        <Weather
          data={this.state.data} />
      </div>
    )
  }
};
