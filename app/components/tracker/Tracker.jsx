import React from 'react';
import TrackerList from './TrackerList';
import tracksData from '../../fixtures/tracks.json';

export default class Tracker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tracks: tracksData,
    };
  }

  render() {
    const { tracks } = this.state;

    return (
      <div>
        <h1 className="page-title">Time Tracker</h1>
        <TrackerList tracks={tracks} />
      </div>
    );
  }
}
