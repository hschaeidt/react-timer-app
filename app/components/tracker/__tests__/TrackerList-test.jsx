import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import TrackerList from '../TrackerList';
import TrackerItem from '../TrackerItem';
import tracks from '../../../fixtures/tracks.json';

function setup() {
  const props = {
    tracks,
    onComplete: jest.fn(),
  };

  const wrapper = shallow(<TrackerList {...props} />);
  const tree = renderer.create(<TrackerList {...props} />);

  return {
    wrapper,
    tree,
    props,
  };
}

describe('<TrackerList />', () => {
  it('renders correctly', () => {
    const { tree } = setup();
    expect(tree).toMatchSnapshot();
  });

  it('should render one TrackerItem component for each track item', () => {
    const { wrapper } = setup();
    expect(wrapper.find(TrackerItem).length).toBe(tracks.length);
  });
});
