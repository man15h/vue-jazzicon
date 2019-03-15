import { mount, shallowMount } from '@vue/test-utils';
import { Jazzicon } from '../../src/components';

let baseProps = {
  seed: 10000,
  address: '0xccf7f134cd45865a5afd5a3a92b969228ce9a3e6',
  diameter: 50
};
describe('Jazzicon', () => {
  it('is called', () => {
    const wrapper = mount(Jazzicon);
    expect(wrapper.name()).toBe('Jazzicon');
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
  it('is rendered with props', () => {
    const wrapper = shallowMount(Jazzicon, {
      propsData: baseProps
    });
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.props().seed).toBe(10000);
    expect(wrapper.props().address).toBe(
      '0xccf7f134cd45865a5afd5a3a92b969228ce9a3e6'
    );
    expect(wrapper.props().diameter).toBe(50);
  });
});
