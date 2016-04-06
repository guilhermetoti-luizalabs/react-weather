var React = require('react');

var SearchBox = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function() {
    return {
      'search': ''
    }
  },

  handleChange: function(event) {
    const value = event.target.value;

    this.setState({
      'search': value
    });
  },

  handleSubmit: function(event) {
    event.preventDefault();
    const search = this.state.search;

    this.setState({
      'search': ''
    });

    if(this.state.search) {
      this.context.router.push('/weather/' + this.state.search)
    }
  },

  render: function() {
    return (
      <form className='navbar-form navbar-right' role='search' onSubmit={this.handleSubmit}>
        <div className='input-group'>
          <input type='text' className='form-control' placeholder='São Paulo, SP' value={this.state.search} onChange={this.handleChange} />
          <span className='input-group-btn'>
            <button type='submit' className='btn btn-success'>Check</button>
          </span>
        </div>
      </form>
    )
  }
});

module.exports = SearchBox;
