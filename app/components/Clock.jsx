import { h, Component } from 'preact';

export default class Clock extends Component {
  static formatSeconds(totalSeconds) {
    let seconds = `${totalSeconds % 60}`;
    let minutes = `${Math.floor(totalSeconds / 60)}`;

    if (seconds < 10) {
      seconds = `0${seconds}`;
    }

    if (minutes < 10) {
      minutes = `0${minutes}`;
    }

    return `${minutes}:${seconds}`;
  }

  render() {
    const { totalSeconds } = this.props;

    return (
      <div className="clock">
        <span className="clock-text">
          {Clock.formatSeconds(totalSeconds)}
        </span>
      </div>
    );
  }
}
