import { h, Component } from 'preact';

export default class CountdownForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      seconds: '',
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    const strSeconds = this.state.seconds;

    if (strSeconds.match(/^[0-9]+$/)) {
      this.setState({
        seconds: '',
      });
      this.props.onSetCountdown(parseInt(strSeconds, 10));
    }
  }

  onChange(e) {
    this.setState({
      seconds: e.target.value,
    });
  }

  render() {
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
