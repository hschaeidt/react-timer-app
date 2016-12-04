import React, { Component, PropTypes } from 'react';
import moment from 'moment';

class TrackerItem extends Component {
  constructor(props) {
    super(props);

    this.handleComplete = this.handleComplete.bind(this);
  }

  handleComplete() {
    const { id } = this.props;

    this.props.onComplete(id);
  }

  render() {
    const { date, completed, ranges } = this.props;
    const totalDuration = moment.duration();

    const renderRanges = () => {
      if (ranges instanceof Array) {
        return ranges.map((range, index) => {
          const to = moment(range.to);
          const from = moment(range.from);

          totalDuration.add(moment.duration(to.diff(from)));

          return (
            <div key={index}>
              from {from.format('LT')} to {to.format('LT')}
            </div>
          );
        });
      }

      return (
        <div>
          No data yet. Maybe add some?
        </div>
      );
    };

    const renderControls = () => {
      if (!completed) {
        return (
          <div className="controls">
            <button className="button primary">Add range</button>
            <button
              id="lock-button"
              className="button warning hollow"
              onClick={this.handleComplete}>
              Lock
            </button>
          </div>
        );
      }

      return (
        <div />
      );
    };

    return (
      <div>
        {moment(date).format('dddd, MMMM Do YYYY')}
        <div>
          Time ranges:
          {renderRanges()}
        </div>
        <div>
          Total time tracked: {totalDuration.hours()} hours {totalDuration.minutes()} minutes
        </div>
        {renderControls()}
      </div>
    );
  }
}

export const trackerItemProps = {
  id: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  ranges: PropTypes.arrayOf(
    PropTypes.shape({
      from: PropTypes.string.isRequired,
      to: PropTypes.string.isRequired,
    }),
  ),
};

TrackerItem.propTypes = Object.assign({}, trackerItemProps, {
  onComplete: PropTypes.func.isRequired,
});

export default TrackerItem;
