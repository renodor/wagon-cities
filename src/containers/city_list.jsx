import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setCities } from '../actions';

import City from './city';


// eslint-disable-next-line react/prefer-stateless-function
class CityList extends Component {
  componentWillMount() {
    this.props.setCities();
  }

  render() {
    return (
      <div className="cities">
        { this.props.cities.map(city => <City city={city} key={city.name} />)}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setCities: setCities },
    dispatch
  );
}

function mapStateToProps(reduxState) {
  return {
    cities: reduxState.cities
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CityList);

