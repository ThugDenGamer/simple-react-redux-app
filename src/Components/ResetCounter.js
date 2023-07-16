import React, { Component } from 'react'
import { resetCounter } from '../Redux/Actions/counterActions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class ResetCounter extends Component {
  render() {
    return (
      <button onClick={e=>{
        this.props.dispatch(resetCounter())
      }}>
        Reset
      </button>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(resetCounter, dispatch) }
}

export default connect(mapDispatchToProps)(ResetCounter)