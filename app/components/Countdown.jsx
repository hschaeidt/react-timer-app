import React from 'react';
import Clock from './Clock';
import CountdownForm from './CountdownForm';
import Controls from './Controls';

export const STATUS = {
  STARTED: 'started',
  STOPPED: 'stopped',
  PAUSED: 'paused',
};

export default class Countdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      status: STATUS.STOPPED,
    };

    this.startTimer = this.startTimer.bind(this);
    this.handleSetCountdown = this.handleSetCountdown.bind(this);
    this.handleStatusChange = this.handleStatusChange.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.status !== prevState.status) {
      switch (this.state.status) {
        case STATUS.STARTED:
          this.startTimer();
          break;
        default:
          clearInterval(this.timer);
          this.timer = undefined;
          break;
      }
    }
  }

  startTimer() {
    this.timer = setInterval(() => {
      const secondsRemaining = this.state.count - 1;
      this.setState({
        count: secondsRemaining,
      });

      if (secondsRemaining === 0) {
        this.handleStatusChange(STATUS.STOPPED);
      }
    }, 1000);
  }

  handleSetCountdown(seconds) {
    if (seconds > 0) {
      this.setState({
        count: seconds,
        status: STATUS.STARTED,
      });
    }
  }

  handleStatusChange(status) {
    const state = { status };

    if (status === STATUS.STOPPED) {
      state.count = 0;
    }

    this.setState(state);
  }

  render() {
    const { count, status } = this.state;

    const renderControlArea = () => {
      if (status !== STATUS.STOPPED) {
        return <Controls countdownStatus={status} onStatusChange={this.handleStatusChange} />;
      }

      return <CountdownForm onSetCountdown={this.handleSetCountdown} />;
    };

    return (
      <div>
        <Clock totalSeconds={count} />
        {renderControlArea()}
      </div>
    );
  }
}
