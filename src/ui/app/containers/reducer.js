/**
 * reducer.js
 *
 * This file contains the reducer used to set values in the Redux store.
 * Note that the Redux store is immutable.
 */

import { fromJS } from 'immutable';

import { DISPATCH_ACTIONS } from './constants';

// TODO: Initialize more things in the Redux store if needed
const initialState = fromJS({
  luckyNumber: -1,
  username: ""
});
//never return undefined from a reducer
function reducer(state = initialState, action) {
  switch (action.type) {
    case DISPATCH_ACTIONS:
      return {
        ...state
      }
    // TODO: Set things in the Redux store
    default:
      return state;
  }
}

export default reducer;
