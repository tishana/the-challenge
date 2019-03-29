/**
 * actions.js
 *
 * This file contains the various actions used by Redux.
 */

import { DISPATCH_ACTIONS } from './constants';

export function getLuckyNumber(values) {
  return {
    type: DISPATCH_ACTIONS.GET_LUCKY_NUMBER,
    payload: {
      luckyNumber: values.luckyNumber
    }
  };
}

// TODO: Add more actions if needed
