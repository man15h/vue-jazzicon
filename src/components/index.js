import Jazzicon from './Jazzicon.vue';
import addressToNumber from './addressToNumber';

export default {
  // eslint-disable-next-line no-unused-vars
  install(Vue, options) {
    Vue.component(Jazzicon.name, Jazzicon);
  }
};

export { Jazzicon, addressToNumber };
