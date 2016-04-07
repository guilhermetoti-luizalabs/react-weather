import React, { Component, PropTypes } from 'react';
import ReactRouter from 'react-router';

const { object } = PropTypes;

import { getForecast } from '../helpers/api';

import Loading from '../components/Loading';
import Forecast from '../containers/Forecast';


export default class Search extends Component {
  static contextTypes = {
    router: object.isRequired
  };

  state = {
    isLoading: true,
    data: {},
    searchParam: ''
  };

  componentDidMount() {
    const searchParam = this.props.routeParams.search;
    this.makeRequest(searchParam);
  }

  componentWillReceiveProps(nextProps) {
    const search = nextProps.routeParams.search;
    this.makeRequest(search);
  }

  makeRequest(search) {
    getForecast(search)
    .then((data) => {
      this.setState({
          isLoading: false,
          data: data,
          searchParam: search
      });
    });
  }

  render() {
    return this.state.isLoading && <Loading /> ||
      this.state.data && <Forecast
        city={this.state.searchParam}
        data={this.state.data} /> || <p>Sem dados</p>
  }
};
