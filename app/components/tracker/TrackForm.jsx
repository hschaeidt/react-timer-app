import React, { Component, PropTypes } from 'react';
import moment from 'moment';

export default class TrackForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      day: moment().format('YYYY-MM-DD'),
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDayChange = this.handleDayChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    if (this.state.day.match(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/) && moment(this.state.day).isValid()) {
      this.props.onAddTrack(this.state.day);
    }
  }

  handleDayChange(e) {
    this.setState({
      day: e.target.value,
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="date"
          value={this.state.day}
          onChange={this.handleDayChange}
        />
        <button className="button expanded">Check-in</button>
      </form>
    );
  }
}

TrackForm.propTypes = {
  onAddTrack: PropTypes.func.isRequired,
};
