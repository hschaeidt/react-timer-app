import React from 'react';
import { STATUS } from './Countdown';

export default class Controls extends React.Component {
  render() {
    const { countdownStatus } = this.props;

    const renderStartStopButton = () => {
      if (countdownStatus === STATUS.STARTED) {
        return <button className="button secondary">Pause</button>;
      }

      return <button className="button primary">Start</button>;
    };

    return (
      <div className="controls">
        {renderStartStopButton()}
        <button className="button alert hollow">Clear</button>
      </div>
    );
  }
}

Controls.propTypes = {
  countdownStatus: React.PropTypes.string.isRequired,
};