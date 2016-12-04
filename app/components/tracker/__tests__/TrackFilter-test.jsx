import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import TrackFilter from '../TrackFilter';

describe('<TrackFilter />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<TrackFilter onFilter={jest.fn()} />);
    expect(tree).toMatchSnapshot();
  });

  it('should call onFilter on change', () => {
    const spy = jest.fn();
    const wrapper = mount(<TrackFilter onFilter={spy} />);

    wrapper.find('#input-show-completed').first().simulate('change', { target: { checked: true } });

    expect(spy).toHaveBeenCalled();
  });
});
