import React, { PropTypes } from 'react';
import moment from 'moment';

const TrackerItem = ({ date, ranges }) => {
  const totalDuration = moment.duration();

  const renderRanges = () => ranges.map((range, index) => {
    const to = moment(range.to);
    const from = moment(range.from);

    totalDuration.add(moment.duration(to.diff(from)));

    return (
      <div key={index}>
        from {from.format('LT')} to {to.format('LT')}
      </div>
    );
  });

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
    </div>
  );
};

export const propTypes = {
  date: PropTypes.string.isRequired,
  ranges: PropTypes.arrayOf(
    PropTypes.shape({
      from: PropTypes.string.isRequired,
      to: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

TrackerItem.propTypes = propTypes;

export default TrackerItem;
