var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;


var Search = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  render: function() {
    return (
      <p>Searching for: {this.props.routeParams.search}</p>
    )
  }
});

module.exports = Search;
