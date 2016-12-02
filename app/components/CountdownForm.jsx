import React from 'react';

export default class CountdownForm extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    const strSeconds = this.seconds.value;

    if (strSeconds.match(/^[0-9]*$/)) {
      this.seconds.value = '';
      this.props.onSetCountdown(parseInt(strSeconds, 10));
    }
  }

  render() {
    return (
      <div>
        <form ref={(r) => { this.form = r; }} onSubmit={this.onSubmit} className="countdown-form">
          <input
            type="text"
            ref={(r) => { this.seconds = r; }}
            placeholder="Enter time in seconds"
          />
          <button className="button expanded">Start</button>
        </form>
      </div>
    );
  }
}

CountdownForm.propTypes = {
  onSetCountdown: React.PropTypes.func.isRequired,
};
