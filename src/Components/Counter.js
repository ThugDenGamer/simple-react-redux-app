import React, { Component } from 'react';
import {connect} from "react-redux";

class Counter extends Component {
  render() {
    return (
      <h1> {this.props.count} </h1>
    )
  }
}

function mapStateToProps(state){
  return { count: state.counterReducer.count } // fetch the counterReducer from state and set it as "count"s value. "count" will act as a "prop"
}
export default connect(mapStateToProps)(Counter) // and then it connect to our component "Counter"