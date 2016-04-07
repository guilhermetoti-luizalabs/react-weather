import React, { Component, PropTypes } from 'react';

const { shape, number } = PropTypes;

import { getDate } from '../helpers/utils';


export default class DayItem extends Component {
    static propTypes = {
        data: shape({
            dt: number.isRequired
        })
    }

    render() {
        const formatedDate = getDate(this.props.data.dt);
        return <div>{formatedDate}</div>
    }
}
