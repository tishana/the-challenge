/**
 * constants.js
 *
 * This file contains some constants used in the Redux infrastructure.
 * It facilitates the centralization of the key values.
 */

export const CONTAINER_KEY = 'code-challenge/welcome';
export const USERNAME_URL = `?username=`

// TODO: Add more action constants if needed
export const DISPATCH_ACTIONS = {
  GET_LUCKY_NUMBER: `${CONTAINER_KEY}/GET_LUCKY_NUMBER${USERNAME_URL}`
};
//trying to get the remainder of the GET url in a constant
