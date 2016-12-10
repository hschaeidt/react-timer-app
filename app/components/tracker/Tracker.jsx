import React from 'react';
import uuid from 'node-uuid';
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
    this.handleComplete = this.handleComplete.bind(this);
    this.handleAddTrack = this.handleAddTrack.bind(this);
    this.handleNewRange = this.handleNewRange.bind(this);
  }

  handleFilter(showCompleted) {
    this.setState({
      filter: {
        showCompleted,
      },
    });
  }

  handleComplete(id) {
    const tracks = this.state.tracks.map((track) => {
      if (id === track.id) {
        return Object.assign({}, track, {
          completed: true,
        });
      }

      return track;
    });

    this.setState({ tracks });
  }

  handleAddTrack(track) {
    const tracks = [
      ...this.state.tracks,
      {
        id: uuid(),
        date: track,
        completed: false,
      },
    ];

    this.setState({
      tracks,
    });
  }

  handleNewRange(id, from, to) {
    const tracks = this.state.tracks.map((track) => {
      if (id === track.id) {
        let ranges = [];

        if (track.ranges instanceof Array) {
          ranges = track.ranges;
        }

        return Object.assign({}, track, {
          ranges: [
            ...ranges,
            {
              from,
              to,
            },
          ],
        });
      }

      return track;
    });

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
        <TrackerList
          tracks={tracks}
          onComplete={this.handleComplete}
          onNewRange={this.handleNewRange}
        />
        <TrackForm onAddTrack={this.handleAddTrack} />
      </div>
    );
  }
}
