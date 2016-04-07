import React, { Component, PropTypes } from 'react';

const { shape, number } = PropTypes;

import { getDate } from '../helpers/utils';


export default class Weather extends Component {
    static propTypes = {
        data: shape({
            dt: number.isRequired
        })
    }

    render() {
        const formatedDate = getDate(this.props.data.dt);
        return (
            <div>
                <p>{formatedDate}</p>
                <p>Clouds: {this.props.data.clouds}</p>
                <p>Deg: {this.props.data.deg}</p>
                <p>Humidity: {this.props.data.humidity}</p>
                <p>Rain: {this.props.data.rain}</p>
                <p>Speed: {this.props.data.speed}</p>
            </div>
        )
    }
}
