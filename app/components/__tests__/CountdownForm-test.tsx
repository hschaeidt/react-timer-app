import * as React from 'react';
import { mount } from 'enzyme';
import * as renderer from 'react-test-renderer';
import CountdownForm from '../CountdownForm';

describe('<CountdownForm />', () => {
  it('renders correctly', () => {
    const spy = jest.fn();
    const tree = renderer.create(<CountdownForm onSetCountdown={spy} />);
    expect(tree).toMatchSnapshot();
  });

  it('should call onSetCountdown if valid seconds entered', () => {
    const spy = jest.fn();
    const countdownForm = mount(<CountdownForm onSetCountdown={spy} />);
    countdownForm.find('input').first().simulate('change', { target: { value: '109' } });
    countdownForm.simulate('submit');
    expect(spy).toHaveBeenCalledWith(109);
  });

  it('should not call onSetCountdown if invalid value entered', () => {
    const spy = jest.fn();
    const countdownForm = mount(<CountdownForm onSetCountdown={spy} />);
    countdownForm.find('input').first().simulate('change', { target: { value: '109b' } });
    countdownForm.simulate('submit');
    expect(spy).not.toHaveBeenCalled();
  });
});
