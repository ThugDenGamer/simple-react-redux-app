import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { increaseCounter } from "../Redux/Actions/counterActions";
import { connect } from 'react-redux';

class IncreaseCounter extends Component {
  render() {
    return (
      <button onClick={e => {
        this.props.dispatch(increaseCounter())
      }}>
        +1
      </button>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(increaseCounter, dispatch) }
}

export default connect(mapDispatchToProps)(IncreaseCounter)