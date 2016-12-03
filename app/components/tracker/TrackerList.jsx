import React, { PropTypes } from 'react';
import TrackerItem, { propTypes as trackerItemProps } from './TrackerItem';

const TrackerList = ({ tracks }) => {
  const renderTrackerItems = () => tracks.map((track, index) => (
    <TrackerItem key={index} {...track} />
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
};

export default TrackerList;
