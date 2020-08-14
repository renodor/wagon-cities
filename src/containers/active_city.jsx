import React from 'react';
import { connect } from 'react-redux';

const ActiveCity = (props) => {
  let activeCity;

  if (props.activeCity) {
    activeCity = (
      <div>
        <h3>{props.activeCity.name}</h3>
        <p>{props.activeCity.address}</p>
        <img src={`https://kitt.lewagon.com/placeholder/cities/${props.activeCity.slug}`} alt="" />
      </div>
    );
  }

  return (
    <div className="active-city">
      {activeCity}
    </div>
  );
};

function mapStateToProps(reduxState) {
  return {
    activeCity: reduxState.activeCity
  };
}

export default connect(mapStateToProps)(ActiveCity);
