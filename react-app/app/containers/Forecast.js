import React, { Component, PropTypes } from 'react';

const { array, string, func, object } = PropTypes;

import DayItem from '../components/DayItem';


export default class Forecast extends Component {
  static contextTypes = {
    router: object.isRequired
  };

  static propTypes = {
    data: array.isRequired,
    city: string.isRequired
  };

  handleClick = (weather) => {
    this.context.router.push({
      pathname: `detail/${this.props.city}`,
      state: {
        weather: weather
      }
    });
  }

  render() {
    return (
      <div>
        <h1>{this.props.city}</h1>

        {this.props.data.map((item) => {
          return (
            <DayItem
              onClick={this.handleClick}
              key={item.dt}
              data={item} />
          )
        })}
      </div>
    )
  }
}
