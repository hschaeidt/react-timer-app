import { h, Component } from 'preact';
import { STATUS } from './Countdown';

export default class Controls extends Component {
  constructor(props) {
    super(props);

    this.onStatusChange = this.onStatusChange.bind(this);
  }

  onStatusChange(newStatus) {
    return () => {
      this.props.onStatusChange(newStatus);
    };
  }

  render() {
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
