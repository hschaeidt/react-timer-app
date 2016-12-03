import React from 'react';
import { shallow } from 'enzyme';
import Countdown, { STATUS } from '../Countdown';

jest.useFakeTimers();

describe('<Countdown />', () => {
  it('should exist', () => {
    expect(Countdown).toBeDefined();
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
      expect(countdown.state.count).toBe(0);

      countdown.handleSetCountdown(0);
      jest.runAllTimers();
      expect(countdown.state.count).toBe(0);

      countdown.handleSetCountdown(10);
      jest.runAllTimers();
      expect(countdown.state.count).toBe(0);
    });
  });
});
