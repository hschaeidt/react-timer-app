import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import TrackerItem from '../TrackerItem';
import tracks from '../../../fixtures/tracks.json';

function setupWrapper(fixtureIndex) {
  const props = Object.assign({}, tracks[fixtureIndex], {
    onComplete: jest.fn(),
  });

  const wrapper = mount(<TrackerItem {...props} />);

  return {
    wrapper,
    props,
  };
}

function setupTree(fixtureIndex) {
  const props = Object.assign({}, tracks[fixtureIndex], {
    onComplete: jest.fn(),
  });

  const tree = renderer.create(<TrackerItem {...props} />);

  return {
    tree,
    props,
  };
}

describe('<TrackerItem />', () => {
  it('renders correctly', () => {
    const { tree } = setupTree(0);
    expect(tree).toMatchSnapshot();
  });

  it('should call handleComplete when lock button clicked', () => {
    const { wrapper, props } = setupWrapper(1);
    wrapper.find('#lock-button').simulate('click');
    expect(props.onComplete).toHaveBeenCalledWith(props.id);
  });

  it('should update totalDuration when new range item added', () => {
    const { wrapper, props } = setupWrapper(1);
    const { ranges } = props;
    const instance = wrapper.instance();
    expect(instance.state.totalDuration.hours()).toBe(8);
    wrapper.setProps({
      ranges: [
        ...ranges,
        {
          from: '2016-12-03T19:00:00.106Z',
          to: '2016-12-03T20:00:00.106Z',
        },
      ],
    });
    expect(instance.state.totalDuration.hours()).toBe(9);
  });

  describe('render', () => {
    it('should render with controls if not locked', () => {
      const { tree } = setupTree(1);
      expect(tree).toMatchSnapshot();
    });

    it('should render without controls if locked', () => {
      const { tree } = setupTree(0);
      expect(tree).toMatchSnapshot();
    });

    it('should be able to render without time ranges', () => {
      const { tree } = setupTree(2);
      expect(tree).toMatchSnapshot();
    });
  });
});
