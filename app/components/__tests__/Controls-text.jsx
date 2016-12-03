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
      const tree = renderer.create(<Controls countdownStatus={STATUS.STARTED} />);
      expect(tree).toMatchSnapshot();
    });

    it('renders a start button when stopped', () => {
      const tree = renderer.create(<Controls countdownStatus={STATUS.STOPPED} />);
      expect(tree).toMatchSnapshot();
    });
  });
});
