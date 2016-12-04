import React, { Component, PropTypes } from 'react';

export default class TrackFilter extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    const showCompleted = this.showCompleted.checked;

    this.props.onFilter(showCompleted);
  }

  render() {
    return (
      <div>
        <label htmlFor="input-show-completed">
          <input
            id="input-show-completed"
            type="checkbox"
            onChange={this.handleChange}
            ref={(ref) => { this.showCompleted = ref; }}
          />
          Show completed days
        </label>
      </div>
    );
  }
}

TrackFilter.propTypes = {
  onFilter: PropTypes.func.isRequired,
};
