var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var getForecast = require('../helpers/api').getForecast;
var Loading = require('../components/Loading');
var Forecast = require('../containers/Forecast');

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
    const searchParam = this.props.routeParams.search;
    getForecast(searchParam)
    .then(function(data) {
        this.setState({
            isLoading: false,
            data: data,
            searchParam: searchParam
        });
    }.bind(this));
  },
  render: function() {
    return this.state.isLoading && <Loading /> || <Forecast city={this.state.searchParam} data={this.state.data} />
  }
});

module.exports = Search;
