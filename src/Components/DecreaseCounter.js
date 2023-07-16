import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { decreaseCounter } from "../Redux/Actions/counterActions";
import { connect } from 'react-redux';

class DecreaseCounter extends Component {
  render() {
    return (
      <button onClick={e=>{
        this.props.dispatch(decreaseCounter())
      }}>
        -1
      </button>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(decreaseCounter, dispatch) }
}

export default connect(mapDispatchToProps)(DecreaseCounter)