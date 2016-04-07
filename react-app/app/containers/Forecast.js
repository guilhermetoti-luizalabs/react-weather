import React, { Component, PropTypes } from 'react';

const { array, string } = PropTypes;

import DayItem from '../components/DayItem';


export default class Forecast extends Component {
  static propTypes = {
    data: array.isRequired,
    city: string.isRequired
  };

  render() {
    return (
      <div>
        <h1>{this.props.city}</h1>

        {this.props.data.map((item) => {
          return <DayItem key={item.dt} data={item} />
        })}
      </div>
    )
  }
}
