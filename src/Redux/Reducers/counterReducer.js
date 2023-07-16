import * as actionTypes from "../Actions/actionTypes";


/**
 * @param {number} state 
 * @param {Object} action Counter Actions
 * @param {string} action.type
 * @param {number} action.payload
 */


const counterReducer = (state = 0, action) => {

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