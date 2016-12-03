import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Countdown, { STATUS } from '../Countdown';

jest.useFakeTimers();

function setup() {
  const wrapper = shallow(<Countdown />);
  const instance = wrapper.instance();
  const tree = renderer.create(<Countdown />);

  return {
    wrapper,
    instance,
    tree,
  };
}

describe('<Countdown />', () => {
  it('renders correctly', () => {
    const { tree } = setup();
    expect(tree).toMatchSnapshot();
  });

  describe('handleSetCountdown', () => {
    it('should set state to started and counting down', () => {
      const { instance } = setup();
      instance.handleSetCountdown(10);

      expect(instance.state.count).toBe(10);
      expect(instance.state.status).toBe(STATUS.STARTED);

      jest.runOnlyPendingTimers();

      expect(instance.state.count).toBe(9);
    });

    it('should never set count less than zero', () => {
      const { instance } = setup();
      jest.runAllTimers();
      expect(instance.timer).not.toBeDefined();
      expect(instance.state.count).toBe(0);

      instance.handleSetCountdown(0);
      expect(instance.timer).not.toBeDefined();
      jest.runAllTimers();
      expect(instance.state.count).toBe(0);

      instance.handleSetCountdown(10);
      expect(instance.timer).toBeDefined();
      jest.runAllTimers();
      expect(instance.timer).not.toBeDefined();
      expect(instance.state.count).toBe(0);
    });

    it('should pause countdown on paused status', () => {
      const { instance } = setup();
      instance.handleSetCountdown(3);
      instance.handleStatusChange(STATUS.PAUSED);

      jest.runAllTimers();

      expect(instance.state.count).toBe(3);
    });

    it('should reset countdown on stopped status', () => {
      const { instance } = setup();
      instance.handleSetCountdown(10);
      instance.handleStatusChange(STATUS.STOPPED);

      jest.runAllTimers();

      expect(instance.state.count).toBe(0);
      expect(instance.timer).not.toBeDefined();
    });

    it('should clear the timer on unmount', () => {
      const { wrapper, instance } = setup();

      expect(instance.timer).not.toBeDefined();
      instance.handleSetCountdown(10);
      expect(instance.timer).toBeDefined();

      wrapper.unmount();
      expect(instance.timer).not.toBeDefined();
    });
  });
});
