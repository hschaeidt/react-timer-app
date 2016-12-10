import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Tracker from '../Tracker';

Date.now = jest.fn(() => 1480896000000);

describe('<Tracker />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Tracker />);
    expect(tree).toMatchSnapshot();
  });

  it('should change the filter status', () => {
    const instance = shallow(<Tracker />).instance();
    expect(instance.state.filter.showCompleted).toBe(false);
    instance.handleFilter(true);
    expect(instance.state.filter.showCompleted).toBe(true);
  });

  it('should mark a track as completed', () => {
    const instance = shallow(<Tracker />).instance();
    expect(instance.state.tracks[1].completed).toBe(false);
    instance.handleComplete(instance.state.tracks[1].id);
    expect(instance.state.tracks[1].completed).toBe(true);
  });

  it('should add new tracks to the list', () => {
    const instance = shallow(<Tracker />).instance();
    expect(instance.state.tracks.length).toBe(3);
    instance.handleAddTrack('2015-01-01');
    expect(instance.state.tracks.length).toBe(4);
  });

  it('should add a new range to the track', () => {
    const instance = shallow(<Tracker />).instance();
    let track = instance.state.tracks[1];
    expect(track.ranges.length).toBe(2);
    instance.handleNewRange(track.id, '21:00', '22:00');
    track = instance.state.tracks[1];
    expect(track.ranges.length).toBe(3);
  });
});
