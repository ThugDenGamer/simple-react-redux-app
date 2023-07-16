import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { decreaseByThreeCounter } from "../Redux/Actions/counterActions";
import { connect } from 'react-redux';

class DecreaseByThreeCounter extends Component {
  render() {
    return (
      <button onClick={e=>{
        this.props.dispatch(decreaseByThreeCounter())
      }}>
        -3
      </button>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(decreaseByThreeCounter, dispatch) }
}

export default connect(mapDispatchToProps)(DecreaseByThreeCounter)