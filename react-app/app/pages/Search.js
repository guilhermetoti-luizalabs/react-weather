import React, { Component, PropTypes } from 'react';
import ReactRouter, { Link } from 'react-router';

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
    data: {}
  };

  componentDidMount() {
    const searchParam = this.props.routeParams.search;
    getForecast(searchParam)
    .then((data) => {
      this.setState({
          isLoading: false,
          data: data,
          searchParam: searchParam
      });
    });
  }

  render() {
    return this.state.isLoading && <Loading /> || <Forecast city={this.state.searchParam} data={this.state.data} />
  }
};
