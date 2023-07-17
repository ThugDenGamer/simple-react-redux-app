import React, { Component } from 'react';
import {connect} from "react-redux";

class Counter extends Component {
  render() {
    return (
      <h1> {this.props.counter} </h1>
    )
  }
}

function mapStateToProps(state){
  return { counter: state.counterReducer } // fetch the counterReducer from state and set it as "counter"s value. "counter" will act as a "prop"
}
export default connect(mapStateToProps)(Counter) // and then it connect to our component "Counter"