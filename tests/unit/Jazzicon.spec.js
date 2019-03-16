import { mount, shallowMount } from '@vue/test-utils';
import { Jazzicon } from '../../src/components';

let baseProps = {
  seed: 10000,
  address: '0xccf7f134cd45865a5afd5a3a92b969228ce9a3e6',
  diameter: 50,
  shapeCount: 4,
  colors: [
    '#01888C', // teal
    '#FC7500', // bright orange
    '#034F5D', // dark teal
    '#F73F01', // orangered
    '#FC1960', // magenta
    '#C7144C', // raspberry
    '#F3C100', // goldenrod
    '#1598F2', // lightning blue
    '#2465E1', // sail blue
    '#F19E02' // gold
  ]
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
    expect(wrapper.props().seed).toBe(baseProps.seed);
    expect(wrapper.props().address).toBe(baseProps.address);
    expect(wrapper.props().diameter).toBe(baseProps.diameter);
    expect(wrapper.props().shapeCount).toBe(baseProps.shapeCount);
    expect(wrapper.props().colors).toBe(baseProps.colors);
  });
});
