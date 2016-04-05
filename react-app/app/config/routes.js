var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;
var Main = require("../containers/Main");

var Home = require("../pages/Home");
var Search = require("../pages/Search");


var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home} />
      <Route path='weather/:search' component={Search} />
    </Route>
  </Router>
);

module.exports = routes;
