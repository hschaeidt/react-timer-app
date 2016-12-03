import React from 'react';
import TrackerList from './TrackerList';

export default class Tracker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tracks: [
        {
          date: 'yesterday',
          ranges: [
            {
              from: 9,
              to: 12,
            },
            {
              from: 13,
              to: 18,
            },
          ],
        },
        {
          date: 'today',
          ranges: [
            {
              from: 8,
              to: 12,
            },
            {
              from: 13,
              to: 17,
            },
          ],
        },
      ],
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
