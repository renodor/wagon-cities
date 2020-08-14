import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectCity } from '../actions';


// eslint-disable-next-line react/prefer-stateless-function
class City extends Component {
  handleClick = () => {
    this.props.selectCity(this.props.city);
  }

  render() {
    return (
      <div className="list-group-item" onClick={this.handleClick}>
        {this.props.city.name}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { selectCity: selectCity },
    dispatch
  );
}

export default connect(null, mapDispatchToProps)(City);

