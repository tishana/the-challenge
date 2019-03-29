/**
 * validate.js
 *
 * This validate function is invoked synchronously from Redux Form
 * whenever the form is submitted. Errors are passed back via the
 * errors object, whose props correspond to the name of the Redux
 * Form field experiencing the error.
 *
 * @see https://redux-form.com/7.4.2/examples/syncvalidation/
 *
 * @param {} values An immutable Map of values from Redux Form
 * @returns An errors object with any validation errors
 */
export const validate = (values) => {
  const errors = {};
  if (!values.username) {
    errors.username = 'Required'
  } else if (!values.firstName) {
    errors.firstName = 'Required'
  } else if (!values.lastName) {
    errors.lastName = 'Required'
  }
  // TODO: Validate that the user has entered a username, first name, and last name

  return errors;
};
