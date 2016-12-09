import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import TrackForm from '../TrackForm';

Date.now = jest.fn(() => 1480896000000);

function setup() {
  const props = {
    onAddTrack: jest.fn(),
  };

  const wrapper = mount(<TrackForm {...props} />);

  return {
    wrapper,
    props,
  };
}

describe('<TrackForm />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<TrackForm onAddTrack={jest.fn()} />);
    expect(tree).toMatchSnapshot();
  });

  it('should call onAddTrack prop with valid data', () => {
    const { wrapper, props } = setup();

    wrapper.find('input').first().simulate('change', { target: { value: '2013-12-25' } });
    wrapper.simulate('submit');
    expect(props.onAddTrack).toHaveBeenCalledWith('2013-12-25');
  });

  it('should not call onAddTrack with data not matching yyyy-MM-dd', () => {
    const { wrapper, props } = setup();

    wrapper.find('input').first().simulate('change', { target: { value: 'abcdefg' } });
    wrapper.simulate('submit');
    expect(props.onAddTrack).not.toHaveBeenCalled();
  });
});
