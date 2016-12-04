import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Tracker from '../Tracker';

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

  it('should add new tracks to the list', () => {
    const instance = shallow(<Tracker />).instance();
    expect(instance.state.tracks.length).toBe(2);
    instance.handleAddTrack('2015-01-01');
    expect(instance.state.tracks.length).toBe(3);
  });
});
