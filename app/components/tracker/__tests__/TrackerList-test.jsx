import React from 'react';
import { shallow } from 'enzyme';
import TrackerList from '../TrackerList';
import TrackerItem from '../TrackerItem';
import tracks from '../../../fixtures/tracks.json';

function setup() {
  const props = {
    tracks,
    onNewRange: jest.fn(),
    onComplete: jest.fn(),
  };

  const wrapper = shallow(<TrackerList {...props} />);

  return {
    wrapper,
    props,
  };
}

describe('<TrackerList />', () => {
  it('should render one TrackerItem component for each track item', () => {
    const { wrapper } = setup();
    expect(wrapper.find(TrackerItem).length).toBe(tracks.length);
  });
});
