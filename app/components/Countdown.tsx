import * as React from 'react';
import Clock from './Clock';
import CountdownForm from './CountdownForm';
import Controls from './Controls';

export enum STATUS {
  STARTED,
  STOPPED,
  PAUSED,
}

interface CountdownProps extends React.Props<any> {}

interface CountdownState {
  count: number,
  status: STATUS,
}

export default class Countdown extends React.Component<CountdownProps, CountdownState> {
  private timer: number;

  constructor(props: CountdownProps) {
    super(props);

    this.state = {
      count: 0,
      status: STATUS.STOPPED,
    };

    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.handleSetCountdown = this.handleSetCountdown.bind(this);
    this.handleStatusChange = this.handleStatusChange.bind(this);
  }

  componentDidUpdate(prevProps: CountdownProps, prevState: CountdownState): void {
    if (this.state.status !== prevState.status) {
      switch (this.state.status) {
        case STATUS.STARTED:
          this.startTimer();
          break;
        default:
          this.stopTimer();
          break;
      }
    }
  }

  componentWillUnmount(): void {
    this.stopTimer();
  }

  startTimer(): void {
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

  stopTimer(): void {
    clearInterval(this.timer);
    this.timer = undefined;
  }

  handleSetCountdown(seconds: number) {
    if (seconds > 0) {
      this.setState({
        count: seconds,
        status: STATUS.STARTED,
      });
    }
  }

  handleStatusChange(status: STATUS) {
    const state: CountdownState = { 
      status,
      count: this.state.count,
    };

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
        <h1 className="page-title">Countdown App</h1>
        <Clock totalSeconds={count} />
        {renderControlArea()}
      </div>
    );
  }
}
