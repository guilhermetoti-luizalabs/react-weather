var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var getForecast = require('../helpers/api').getForecast;

var Search = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function() {
    return {
        isLoading: true,
        data: {}
    }
  },
  componentDidMount: function() {
    getForecast(this.props.routeParams.search)
    .then(function(data) {
        this.setState({
            isLoading: false,
            data: data
        });
    }.bind(this));
  },
  render: function() {
    return (
      <p>{this.state.isLoading && "Carregando..." || `Data: ${this.state.data.city}/${this.state.data.state}`}</p>
    )
  }
});

module.exports = Search;
