import * as React from 'react';
import { shallow } from 'enzyme';
import * as renderer from 'react-test-renderer';
import Timer from '../Timer';
import { STATUS } from '../Countdown';

jest.useFakeTimers();

function setup() {
  const wrapper = shallow(<Timer />);
  const instance = wrapper.instance();
  const tree = renderer.create(<Timer />);

  return {
    wrapper,
    instance,
    tree,
  };
}

describe('<Timer />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Timer />);
    expect(tree).toMatchSnapshot();
  });

  it('should change the status to started', () => {
    const { instance } = setup();
    instance.handleStatusChange(STATUS.STARTED);
    expect(instance.state.status).toBe(STATUS.STARTED);
  });

  it('should stop the timer and reset the count', () => {
    const { instance } = setup();
    instance.handleStatusChange(STATUS.STARTED);
    jest.runOnlyPendingTimers();
    expect(instance.state.count).toBe(1);
    instance.handleStatusChange(STATUS.STOPPED);
    expect(instance.state.status).toBe(STATUS.STOPPED);
    expect(instance.state.count).toBe(0);
  });

  it('should clear the timer on unmount', () => {
    const { wrapper, instance } = setup();

    expect(instance.timer).not.toBeDefined();
    instance.handleStatusChange(STATUS.STARTED);
    expect(instance.timer).toBeDefined();

    wrapper.unmount();
    expect(instance.timer).not.toBeDefined();
  });
});
