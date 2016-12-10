import React, { Component, PropTypes } from 'react';

class ItemControls extends Component {
  constructor(props) {
    super(props);

    this.handleNewRange = this.handleNewRange.bind(this);
  }


  handleNewRange(e) {
    e.preventDefault();

    const from = this.from.value;
    const to = this.to.value;

    const timeFormat = /[0-9]{2}:[0-9]{2}/;

    if (from.match(timeFormat) && to.match(timeFormat)) {
      this.from.value = '';
      this.to.value = '';

      this.props.onNewRange(from, to);
    }
  }

  render() {
    const { onComplete } = this.props;

    return (
      <div className="button-group">
        <form id="handle-new-range-form" onSubmit={this.handleNewRange}>
          <input type="time" placeholder="--:--" ref={(ref) => { this.from = ref; }} />
          <input type="time" placeholder="--:--" ref={(ref) => { this.to = ref; }} />
          <button className="button primary">Add range</button>
        </form>
        <button
          id="lock-button"
          className="button alert hollow"
          onClick={onComplete}
        >
          Lock
        </button>
      </div>
    );
  }
}

ItemControls.propTypes = {
  onNewRange: PropTypes.func.isRequired,
  onComplete: PropTypes.func.isRequired,
};

export default ItemControls;
