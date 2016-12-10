import React, { PropTypes } from 'react';
import TrackerItem, { trackerItemProps } from './TrackerItem';

const TrackerList = ({ tracks, onComplete, onNewRange }) => {
  const renderTrackerItems = () => tracks.map((track, index) => (
    <TrackerItem key={index} {...track} onComplete={onComplete} onNewRange={onNewRange} />
  ));

  return (
    <div>
      {renderTrackerItems()}
    </div>
  );
};

TrackerList.propTypes = {
  tracks: PropTypes.arrayOf(
    PropTypes.shape(trackerItemProps),
  ).isRequired,
  onNewRange: PropTypes.func.isRequired,
  onComplete: PropTypes.func.isRequired,
};

export default TrackerList;
