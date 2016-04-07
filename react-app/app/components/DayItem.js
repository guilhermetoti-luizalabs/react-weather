import React, { Component, PropTypes } from 'react';

const { shape, number, func } = PropTypes;

import { getDate } from '../helpers/utils';


export default class DayItem extends Component {
    static propTypes = {
        onClick: func.isRequired,
        data: shape({
            dt: number.isRequired
        })
    }

    render() {
        const formatedDate = getDate(this.props.data.dt);
        return <div onClick={this.props.onClick.bind(null, this.props.data)}>{formatedDate}</div>
    }
}
