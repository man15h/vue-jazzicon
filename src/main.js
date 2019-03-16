import Vue from 'vue';
import App from './App.vue';
import Jazzicon from './components';
import Meta from 'vue-meta';
Vue.config.productionTip = false;
Vue.use(Meta);
Vue.component(Jazzicon.name, Jazzicon);
new Vue({
  mounted: () => document.dispatchEvent(new Event('x-app-rendered')),
  render: h => h(App)
}).$mount('#app');
