/**
 * LuckyNumberDisplay.js
 *
 * This component displays the user's full name and their lucky number!
 * Its props are passed down from the LuckyNumber container.
 */

import React from 'react';
import PropTypes from 'prop-types';

class LuckyNumberDisplay extends React.PureComponent {
  render() {
    // TODO: Receive props passed down from LuckyNumber container
    const { values } = this.props;

    return (
      <div className="mt5 pa4 center w-25 bg-light-gray">
        {/* TODO: Display the user's full name and their lucky number */}
        <h2>Hello, {values.firstName} {values.lastName}!</h2>
        <h2>Your lucky number is</h2>
        {/* <h2>{this.values.luckyNumber}</h2> */}
      </div>
    );
  }
}

// TODO: Add PropTypes
LuckyNumberDisplay.propTypes = {
  values: PropTypes.func.isRequired
};

export default LuckyNumberDisplay;
