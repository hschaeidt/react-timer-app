import React from 'react';
import moment from 'moment';
import TrackFilter from './TrackFilter';
import TrackerList from './TrackerList';
import TrackForm from './TrackForm';
import tracksData from '../../fixtures/tracks.json';

export default class Tracker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tracks: tracksData,
      filter: {
        showCompleted: false,
      },
    };

    this.handleFilter = this.handleFilter.bind(this);
    this.handleAddTrack = this.handleAddTrack.bind(this);
  }

  handleFilter(showCompleted) {
    this.setState({
      filter: {
        showCompleted,
      },
    });
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
        <TrackFilter onFilter={this.handleFilter} />
        <TrackerList tracks={tracks} />
        <TrackForm onAddTrack={this.handleAddTrack} />
      </div>
    );
  }
}
