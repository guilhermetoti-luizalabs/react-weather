var React = require('react');
var PropTypes = React.PropTypes;

var DayItem = require('../components/DayItem');


var Forecast = React.createClass({
  render: function() {
    return (
      <div>
        <h1>{this.props.city}</h1>

        {this.props.data.map((item) => {
          return <DayItem key={item.dt} data={item} />
        })}
      </div>
    )
  }
});

Forecast.propTypes = {
  data: PropTypes.array.isRequired,
  city: PropTypes.string.isRequired
}

module.exports = Forecast;
