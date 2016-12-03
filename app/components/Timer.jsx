import React from 'react';
import Clock from './Clock';
import Controls from './Controls';
import { STATUS } from './Countdown';

export default class Timer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      status: STATUS.STOPPED,
    };

    this.handleStatusChange = this.handleStatusChange.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.status !== prevState.status) {
      if (this.state.status === STATUS.STARTED) {
        this.startTimer();
      } else {
        this.stopTimer();
      }
    }
  }

  componentWillUnmount() {
    this.stopTimer();
  }

  startTimer() {
    this.timer = setInterval(() => {
      const count = this.state.count + 1;
      this.setState({ count });
    }, 1000);
  }

  stopTimer() {
    clearInterval(this.timer);
    this.timer = undefined;
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

    return (
      <div>
        <h1 className="page-title">Timer App</h1>
        <Clock totalSeconds={count} />
        <Controls countdownStatus={status} onStatusChange={this.handleStatusChange} />
      </div>
    );
  }
}
