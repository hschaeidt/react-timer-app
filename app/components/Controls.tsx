import * as React from 'react';
import { STATUS } from './Countdown';

interface ControlsProps extends React.Props<any> {
  countdownStatus: STATUS;
  onStatusChange: (newState: STATUS) => void;
}

export default class Controls extends React.Component<ControlsProps, void> {
  constructor(props: ControlsProps) {
    super(props);

    this.onStatusChange = this.onStatusChange.bind(this);
  }

  onStatusChange(newStatus: STATUS): () => void {
    return () => {
      this.props.onStatusChange(newStatus);
    };
  }

  render(): JSX.Element {
    const { countdownStatus } = this.props;

    const renderStartStopButton = () => {
      if (countdownStatus === STATUS.STARTED) {
        return (
          <button
            className="button secondary"
            onClick={this.onStatusChange(STATUS.PAUSED)}
          >
            Pause
          </button>
        );
      }

      return (
        <button
          className="button primary"
          onClick={this.onStatusChange(STATUS.STARTED)}
        >
          Start
        </button>
      );
    };

    return (
      <div className="controls">
        {renderStartStopButton()}
        <button
          className="button alert hollow"
          onClick={this.onStatusChange(STATUS.STOPPED)}
        >
          Clear
        </button>
      </div>
    );
  }
}
