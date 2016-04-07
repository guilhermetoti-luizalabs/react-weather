var React = require('react');
var PropTypes = React.PropTypes;

var getDate = require('../helpers/utils');


var DayItem = React.createClass({
    render: function() {
        const formatedDate = getDate(this.props.data.dt);

        return <div>{formatedDate}</div>
    }
});

DayItem.PropTypes = {
    data: PropTypes.shape({
        dt: PropTypes.number.isRequired
    })
}

module.exports = DayItem;
