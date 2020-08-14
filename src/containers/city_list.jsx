import React, { Component } from 'react';
import { connect } from 'react-redux';

import City from './city';


// eslint-disable-next-line react/prefer-stateless-function
class CityList extends Component {
  renderList() {
    return this.props.cities.map(city => <City key={city.name} city={city} />);
  }

  render() {
    return (
      <div className="cities">
        {this.renderList()}
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    cities: reduxState.cities
  };
}

export default connect(mapStateToProps)(CityList);

