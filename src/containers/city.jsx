import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import selectCity from '../actions/index';


// eslint-disable-next-line react/prefer-stateless-function
const City = (props) => {
  return (
    <div role="button" tabIndex={0} className="list-group-item" onClick={() => props.selectCity(props.city)}>
      {props.city.name}
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { selectCity },
    dispatch
  );
}

export default connect(null, mapDispatchToProps)(City);

