import React, { Component, PropTypes } from 'react';
import moment from 'moment';
import ItemControls from './item/ItemControls';

class TrackerItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      totalDuration: moment.duration(),
    };

    this.calculateTotalDuration = this.calculateTotalDuration.bind(this);
    this.handleComplete = this.handleComplete.bind(this);
    this.handleNewRange = this.handleNewRange.bind(this);
  }

  componentDidMount() {
    this.calculateTotalDuration();
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.ranges instanceof Array && (
        !(prevProps.ranges instanceof Array) ||
        (prevProps.ranges.length !== this.props.ranges.length)
      )
    ) {
      this.calculateTotalDuration();
    }
  }

  calculateTotalDuration() {
    const { ranges } = this.props;
    const totalDuration = moment.duration();

    if (ranges instanceof Array) {
      ranges.forEach((range) => {
        const to = moment(range.to, 'hh:mm');
        const from = moment(range.from, 'hh:mm');

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

  handleNewRange(from, to) {
    const { id } = this.props;

    this.props.onNewRange(id, from, to);
  }

  render() {
    const { date, completed, ranges } = this.props;
    const { totalDuration } = this.state;

    const renderRanges = () => {
      if (ranges instanceof Array) {
        return ranges.map((range, index) => {
          const to = moment(`${date}${range.to}`, 'YYYY-MM-DDhh:mm');
          const from = moment(`${date}${range.from}`, 'YYYY-MM-DDhh:mm');

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
        return <ItemControls onComplete={this.handleComplete} onNewRange={this.handleNewRange} />;
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
  onNewRange: PropTypes.func.isRequired,
  onComplete: PropTypes.func.isRequired,
});

export default TrackerItem;
