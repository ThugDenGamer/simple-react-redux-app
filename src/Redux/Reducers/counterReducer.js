import * as actionTypes from "../Actions/actionTypes";

const INITIAL_STATE = {
  count: 0
} // like state of the class

/**
 * @param {Object} state
 * @param {number} state.count
 * @param {Object} action Counter Actions
 * @param {string} action.type
 * @param {number} action.payload
 */

// reducer is using for changing the old state
const counterReducer = (state = INITIAL_STATE, action) => {

  switch (action.type) {

    case actionTypes.INCREASE_COUNTER:
      return {
        ...state,
        count: state.count + action.payload
      }
    
    case actionTypes.DECREASE_COUNTER:
      return {
        ...state,
        count: state.count - action.payload
      }
    
    case actionTypes.INCREASE_BY_TWO_COUNTER:
      return {
        ...state,
        count: state.count + action.payload
      }

    case actionTypes.DECREASE_BY_THREE_COUNTER:
      return {
        ...state,
        count: state.count - action.payload
      }
    
    case actionTypes.RESET_COUNTER:
      return {
        ...state,
        count: 0
      }
    
    default:
      return state;
  }
}


export default counterReducer