import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import TrackerItem from '../TrackerItem';
import tracks from '../../../fixtures/tracks.json';

function setup(fixtureIndex) {
  const props = Object.assign({}, tracks[fixtureIndex], {
    onComplete: jest.fn(),
  });

  const wrapper = shallow(<TrackerItem {...props} />);
  const tree = renderer.create(<TrackerItem {...props} />);

  return {
    wrapper,
    tree,
    props,
  };
}

describe('<TrackerItem />', () => {
  it('renders correctly', () => {
    const { tree } = setup(0);
    expect(tree).toMatchSnapshot();
  });

  it('should call handleComplete when lock button clicked', () => {
    const { wrapper, props } = setup(1);
    wrapper.find('#lock-button').simulate('click');
    expect(props.onComplete).toHaveBeenCalledWith(props.id);
  });

  describe('render', () => {
    it('should render with controls if not locked', () => {
      const { tree } = setup(1);
      expect(tree).toMatchSnapshot();
    });

    it('should render without controls if locked', () => {
      const { tree } = setup(0);
      expect(tree).toMatchSnapshot();
    });

    it('should be able to render without time ranges', () => {
      const { tree } = setup(2);
      expect(tree).toMatchSnapshot();
    });
  });
});
