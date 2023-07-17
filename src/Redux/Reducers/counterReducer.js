import * as actionTypes from "../Actions/actionTypes";

const INITIAL_STATE = 0 // like state of the class

/**
 * @param {number} state 
 * @param {Object} action Counter Actions
 * @param {string} action.type
 * @param {number} action.payload
 */

// reducer is using for changing the old state
const counterReducer = (state = INITIAL_STATE, action) => {

  console.log(action)

  let newState; // to protect the original state
  switch (action.type) {

    case actionTypes.INCREASE_COUNTER:
      return (newState = state + action.payload);
    
    case actionTypes.DECREASE_COUNTER:
      return (newState = state - action.payload);
    
    case actionTypes.INCREASE_BY_TWO_COUNTER:
      return (newState = state + action.payload);

    case actionTypes.DECREASE_BY_THREE_COUNTER:
      return (newState = state - action.payload);
    
    case actionTypes.RESET_COUNTER:
      return 0;
    
    default:
      return state;
  }
}


export default counterReducer