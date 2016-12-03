import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Countdown, { STATUS } from '../Countdown';

jest.useFakeTimers();

describe('<Countdown />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Countdown />);
    expect(tree).toMatchSnapshot();
  });

  describe('handleSetCountdown', () => {
    it('should set state to started and counting down', () => {
      const countdown = shallow(<Countdown />).instance();
      countdown.handleSetCountdown(10);

      expect(countdown.state.count).toBe(10);
      expect(countdown.state.status).toBe(STATUS.STARTED);

      jest.runOnlyPendingTimers();

      expect(countdown.state.count).toBe(9);
    });

    it('should never set count less than zero', () => {
      const countdown = shallow(<Countdown />).instance();
      jest.runAllTimers();
      expect(countdown.timer).not.toBeDefined();
      expect(countdown.state.count).toBe(0);

      countdown.handleSetCountdown(0);
      expect(countdown.timer).not.toBeDefined();
      jest.runAllTimers();
      expect(countdown.state.count).toBe(0);

      countdown.handleSetCountdown(10);
      expect(countdown.timer).toBeDefined();
      jest.runAllTimers();
      expect(countdown.timer).not.toBeDefined();
      expect(countdown.state.count).toBe(0);
    });

    it('should clear the timer on unmount', () => {
      const countdownWrapper = shallow(<Countdown />);
      const countdown = countdownWrapper.instance();

      expect(countdown.timer).not.toBeDefined();
      countdown.handleSetCountdown(10);
      expect(countdown.timer).toBeDefined();

      countdownWrapper.unmount();
      expect(countdown.timer).not.toBeDefined();
    });
  });
});
