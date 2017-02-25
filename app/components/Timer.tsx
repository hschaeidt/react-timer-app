import * as React from 'react';
import Clock from './Clock';
import Controls from './Controls';
import { STATUS } from './Countdown';

interface TimerProps extends React.Props<any> {}
interface TimerState {
  count: number;
  status: STATUS;
}

export default class Timer extends React.Component<TimerProps, TimerState>  {
  private timer: number;

  constructor(props: TimerProps) {
    super(props);

    this.state = {
      count: 0,
      status: STATUS.STOPPED,
    };

    this.handleStatusChange = this.handleStatusChange.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
  }

  componentDidUpdate(prevProps: TimerProps, prevState: TimerState) {
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

  startTimer(): void {
    this.timer = setInterval(() => {
      const count = this.state.count + 1;
      this.setState({ count });
    }, 1000);
  }

  stopTimer(): void {
    clearInterval(this.timer);
    this.timer = undefined;
  }

  handleStatusChange(status: STATUS): void {
    const state: TimerState = {
      status,
      count: this.state.count,
    };

    if (status === STATUS.STOPPED) {
      state.count = 0;
    }

    this.setState(state);
  }

  render(): JSX.Element {
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
