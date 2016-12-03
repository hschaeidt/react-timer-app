import React from 'react';
import renderer from 'react-test-renderer';
import TrackerItem from '../TrackerItem';
import tracks from '../../../fixtures/tracks.json';

function setup() {
  const props = tracks[0];

  const tree = renderer.create(<TrackerItem {...props} />);

  return {
    tree,
    props,
  };
}

describe('<TrackerItem />', () => {
  it('renders correctly', () => {
    const { tree } = setup();
    expect(tree).toMatchSnapshot();
  });
});
