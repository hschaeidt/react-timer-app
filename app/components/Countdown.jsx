import React from 'react';
import Clock from './Clock';
import CountdownForm from './CountdownForm';

export const STATUS = {
  STARTED: 'started',
  STOPPED: 'stopped',
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
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.status !== prevState.status) {
      switch (this.state.status) {
        case STATUS.STARTED:
          this.startTimer();
          break;
        case STATUS.STOPPED:
          clearInterval(this.timer);
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
        this.setState({
          status: STATUS.STOPPED,
        });
      }
    }, 1000);
  }

  handleSetCountdown(seconds) {
    this.setState({
      count: seconds,
      status: STATUS.STARTED,
    });
  }

  render() {
    const { count } = this.state;

    return (
      <div>
        <Clock totalSeconds={count} />
        <CountdownForm onSetCountdown={this.handleSetCountdown} />
      </div>
    );
  }
}
