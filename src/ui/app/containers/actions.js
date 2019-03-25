/**
 * actions.js
 *
 * This file contains the various actions used by Redux.
 */

import { DISPATCH_ACTIONS } from './constants';

export function getLuckyNumber(username) {
  return {
    type: DISPATCH_ACTIONS.GET_LUCKY_NUMBER,
    username: username
  };
}

// TODO: Add more actions if needed
