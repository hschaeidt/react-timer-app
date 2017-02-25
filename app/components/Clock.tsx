import * as React from 'react';

interface ClockProps extends React.Props<any> {
  totalSeconds: number,
}

export default class Clock extends React.Component<ClockProps, void> {
  public static defaultProps: ClockProps = {
    totalSeconds: 0,
  }

  public static formatSeconds(totalSeconds: number): string {
    const seconds = totalSeconds % 60;
    const minutes = Math.floor(totalSeconds / 60);

    let strSeconds = `${seconds}`;
    let strMinutes = `${minutes}`;

    if (seconds < 10) {
      strSeconds = `0${seconds}`;
    }

    if (minutes < 10) {
      strMinutes = `0${minutes}`;
    }

    return `${strMinutes}:${strSeconds}`;
  }

  render(): JSX.Element {
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
