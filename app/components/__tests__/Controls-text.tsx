import * as React from 'react';
import { shallow } from 'enzyme';
import * as renderer from 'react-test-renderer';
import Controls from '../Controls';
import { STATUS } from '../Countdown';

describe('<Controls />', () => {
  it('onStatusChange should return a callback with correct value', () => {
    const spy = jest.fn();
    const wrapper = shallow(<Controls countdownStatus={STATUS.STARTED} onStatusChange={spy} />);
    const callback = wrapper.instance().onStatusChange(STATUS.STOPPED);
    callback();
    expect(spy).toHaveBeenCalledWith(STATUS.STOPPED);
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
