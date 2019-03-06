import React from 'react';
import { mount } from 'enzyme';
import { CheckBox } from '@edx/paragon';

import Kitty from './index';

describe('Kitty', () => {
  it('will have no emoji on page load', () => {
    const wrapper = mount(<Kitty />);
    expect(wrapper.find('#e')).toHaveLength(0);
  });

  it('will display 💩 when the display name is Adam S.', () => {
    const wrapper = mount(<Kitty displayName="Adam S." />);
    expect(wrapper.find('#e')).toHaveLength(1);
    expect(wrapper.find('#e').contains('💩')).toBe(true);
    expect(wrapper.find('#e').prop('children')).toContain('💩');
    expect(wrapper.find('#e').text()).toEqual('💩');
  });

  it('will display 🤴🏻 when the display name is Rickie', () => {
    const wrapper = mount(<Kitty displayName="Rickie" />);
    expect(wrapper.find('#e')).toHaveLength(1);
    expect(wrapper.find('#e').prop('children')).toContain('🤴🏻');
    expect(wrapper.find('#e').text()).toEqual('🤴🏻');
  });

  it('will display 🦃 when the display name is Ned', () => {
    const wrapper = mount(<Kitty displayName="Ned" />);
    expect(wrapper.find('#e')).toHaveLength(1);
    expect(wrapper.find('#e').text()).toEqual('🦃');
  });

  it('will display 🙀 when the display name is something other than Rickie or Adam S.', () => {
    const wrapper = mount(<Kitty displayName="George" />);
    expect(wrapper.find('#e')).toHaveLength(1);
    expect(wrapper.find('#e').text()).toEqual('🙀');
  });

  it('when the display name changes, the component changes the name', () => {
    const wrapper = mount(<Kitty />);

    expect(wrapper.find('#e')).toHaveLength(0);

    wrapper.setProps({ displayName: 'George' });

    expect(wrapper.find('#e')).toHaveLength(1);
    expect(wrapper.find('#e').text()).toEqual('🙀');
  });
});
