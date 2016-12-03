import React, { PropTypes } from 'react';

const TrackerItem = ({ date, ranges }) => (
  <div>
    {date}
    <div>
      {ranges.map((range, index) => (
        <p key={index}>
          Ranges:
          <span>From: {range.from}</span>
          <span>To: {range.to}</span>
        </p>
      ))}
    </div>
  </div>
);

export const propTypes = {
  date: PropTypes.string.isRequired,
  ranges: PropTypes.arrayOf(
    PropTypes.shape({
      from: PropTypes.number.isRequired,
      to: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

TrackerItem.propTypes = propTypes;

export default TrackerItem;
