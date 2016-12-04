import React, { Component, PropTypes } from 'react';
import moment from 'moment';

class TrackerItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      totalDuration: moment.duration(),
    };

    this.calculateTotalDuration = this.calculateTotalDuration.bind(this);
    this.handleComplete = this.handleComplete.bind(this);
  }

  componentDidMount() {
    this.calculateTotalDuration();
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.ranges instanceof Array &&
      (prevProps.ranges.length !== this.props.ranges.length)
    ) {
      this.calculateTotalDuration();
    }
  }

  calculateTotalDuration() {
    const { ranges } = this.props;
    const totalDuration = moment.duration();

    if (ranges instanceof Array) {
      ranges.forEach((range) => {
        const to = moment(range.to);
        const from = moment(range.from);

        totalDuration.add(moment.duration(to.diff(from)));
      });
    }

    this.setState({
      totalDuration,
    });
  }

  handleComplete() {
    const { id } = this.props;

    this.props.onComplete(id);
  }

  render() {
    const { date, completed, ranges } = this.props;
    const { totalDuration } = this.state;

    const renderRanges = () => {
      if (ranges instanceof Array) {
        return ranges.map((range, index) => {
          const to = moment(range.to);
          const from = moment(range.from);

          return (
            <div key={index}>
              from {from.format('LT')} to {to.format('LT')}
            </div>
          );
        });
      }

      return (
        <div className="callout warning">
          No data yet. Maybe add some?
        </div>
      );
    };

    const renderControls = () => {
      if (!completed) {
        return (
          <div className="button-group">
            <button className="button primary">Add range</button>
            <button
              id="lock-button"
              className="button alert hollow"
              onClick={this.handleComplete}
            >
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
      <div className="callout clearfix">
        <div className="float-right">
          {totalDuration.hours()} h {totalDuration.minutes()} m
        </div>
        <p><b>{moment(date).format('dddd, MMMM Do YYYY')}</b></p>
        <div className="time-ranges">
          Time ranges:
          {renderRanges()}
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
