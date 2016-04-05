var React = require('react');
var NavBar = require('./NavBar');
var styles = require('../styles');

var Main = React.createClass({
  render: function() {
    return (
      <div className='container-fluid'>
        <NavBar />

        <div className='row' style={styles.bodyContainer}>
          <div className='col-lg-12'>
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
});

module.exports = Main;
