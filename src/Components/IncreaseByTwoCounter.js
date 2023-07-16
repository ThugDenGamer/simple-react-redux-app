import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { increaseByTwoCounter } from "../Redux/Actions/counterActions";
import { connect } from 'react-redux';

class IncreaseByTwoCounter extends Component {
  render() {
    return (
      <button onClick={e=>{
        this.props.dispatch(increaseByTwoCounter())
      }}>
        +2
      </button>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(increaseByTwoCounter, dispatch) }
}

export default connect(mapDispatchToProps)(IncreaseByTwoCounter)