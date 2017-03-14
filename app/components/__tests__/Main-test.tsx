import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Main from '../Main';

describe('<Main />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Main />);
    expect(tree).toMatchSnapshot();
  });
});
