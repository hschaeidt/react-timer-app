import React from 'react';
import renderer from 'react-test-renderer';
import Tracker from '../Tracker';

describe('<Tracker />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Tracker />);
    expect(tree).toMatchSnapshot();
  });
});
