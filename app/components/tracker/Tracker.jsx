import React from 'react';
import moment from 'moment';
import TrackerList from './TrackerList';
import TrackForm from './TrackForm';
import tracksData from '../../fixtures/tracks.json';

export default class Tracker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tracks: tracksData,
    };

    this.handleAddTrack = this.handleAddTrack.bind(this);
  }

  handleAddTrack(track) {
    const tracks = [
      ...this.state.tracks,
      {
        date: track,
        ranges: [{
          from: moment().toISOString(),
          to: moment().add(1, 'hour').toISOString(),
        }],
      },
    ];

    this.setState({
      tracks,
    });
  }

  render() {
    const { tracks } = this.state;

    return (
      <div>
        <h1 className="page-title">Time Tracker</h1>
        <TrackerList tracks={tracks} />
        <TrackForm onAddTrack={this.handleAddTrack} />
      </div>
    );
  }
}
