var React = require('react');
var SearchBox = require('../containers/SearchBox');

var NavBar = React.createClass({
  render: function() {
    return (
      <nav className='navbar navbar-default navbar-fixed-top'>
        <div className='container-fluid'>
          <div className='navbar-header'>
            <a className='navbar-brand' href='#'>React Weather</a>
          </div>
          <SearchBox />
        </div>
      </nav>
    )
  }
});

module.exports = NavBar;
