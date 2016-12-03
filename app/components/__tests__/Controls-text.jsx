import React from 'react';
import renderer from 'react-test-renderer';
import Controls from '../Controls';
import { STATUS } from '../Countdown';

describe('<Controls />', () => {
  it('should exist', () => {
    expect(Controls).toBeDefined();
  });

  describe('render', () => {
    it('renders a pause button when started', () => {
      const spy = jest.fn();
      const tree = renderer.create(
        <Controls countdownStatus={STATUS.STARTED} onStatusChange={spy} />,
      );
      expect(tree).toMatchSnapshot();
    });

    it('renders a start button when paused', () => {
      const spy = jest.fn();
      const tree = renderer.create(
        <Controls countdownStatus={STATUS.PAUSED} onStatusChange={spy} />,
      );
      expect(tree).toMatchSnapshot();
    });
  });
});
