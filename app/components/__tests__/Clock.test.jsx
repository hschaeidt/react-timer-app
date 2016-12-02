import React from 'react';
import { shallow } from 'enzyme';
import Clock from '../Clock';

describe('<Clock />', () => {
  it('should exist', () => {
    expect(Clock).toBeDefined();
  });

  describe('render', () => {
    it('should render clock to output', () => {
      const clock = shallow(<Clock totalSeconds={62} />);
      const actualText = clock.find('.clock-text').text();

      expect(actualText);
    });
  });

  describe('formatSeconds', () => {
    it('should format seconds', () => {
      const seconds = 615;
      const expected = '10:15';
      const actual = Clock.formatSeconds(seconds);

      expect(actual).toBe(expected);
    });

    it('should format seconds when min/sec less than 10', () => {
      const seconds = 61;
      const expected = '01:01';
      const actual = Clock.formatSeconds(seconds);

      expect(actual).toBe(expected);
    });
  });
});
