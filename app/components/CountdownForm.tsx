import * as React from 'react';

interface CountdownFormProps {
  onSetCountdown: (seconds: number) => void,
}

interface CountdownFormState {
  seconds: string,
}

export default class CountdownForm extends React.Component<CountdownFormProps, CountdownFormState> {
  constructor(props: CountdownFormProps) {
    super(props);

    this.state = {
      seconds: '',
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    const strSeconds = this.state.seconds;

    if (strSeconds.match(/^[0-9]+$/)) {
      this.setState({
        seconds: '',
      });
      this.props.onSetCountdown(parseInt(strSeconds, 10));
    }
  }

  onChange(e: React.FormEvent<HTMLInputElement>): void {
    this.setState({
      seconds: e.currentTarget.value,
    });
  }

  render(): JSX.Element {
    const { seconds } = this.state;

    return (
      <form onSubmit={this.onSubmit} className="countdown-form">
        <input
          type="text"
          placeholder="Enter time in seconds"
          onChange={this.onChange}
          value={seconds}
        />
        <button className="button expanded">Start</button>
      </form>
    );
  }
}
