import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import ItemControls from '../ItemControls';

function setup() {
  const props = {
    onNewRange: jest.fn(),
    onComplete: jest.fn(),
  };

  const wrapper = mount(<ItemControls {...props} />);

  return {
    wrapper,
    props,
  };
}

describe('<ItemControls />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<ItemControls onComplete={jest.fn()} onNewRange={jest.fn()} />);
    expect(tree).toMatchSnapshot();
  });

  it('should call onNewRange when submitted with valid times', () => {
    const { wrapper, props } = setup();
    wrapper.instance().from.value = '10:00';
    wrapper.instance().to.value = '12:00';
    wrapper.find('#handle-new-range-form').simulate('submit');
    expect(props.onNewRange).toHaveBeenCalledWith('10:00', '12:00');
  });
});
