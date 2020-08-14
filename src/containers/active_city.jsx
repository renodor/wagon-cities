import React from 'react';
import { connect } from 'react-redux';

const ActiveCity = (props) => {
  let selectedCity;

  if (props.selectedCity) {
    selectedCity = (
      <div>
        <h3>{props.selectedCity.name}</h3>
        <p>{props.selectedCity.address}</p>
        <img src={`https://kitt.lewagon.com/placeholder/cities/${props.selectedCity.slug}`} alt="" />
      </div>
    );
  }

  return (
    <div className="active-city">
      {selectedCity}
    </div>
  );
};

function mapStateToProps(reduxState) {
  return {
    selectedCity: reduxState.selectedCity
  };
}

export default connect(mapStateToProps, null)(ActiveCity);
