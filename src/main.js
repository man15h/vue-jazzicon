import Vue from 'vue';
import App from './App.vue';
import Jazzicon from './components';

Vue.config.productionTip = false;

Vue.use(Jazzicon);
new Vue({
  render: h => h(App)
}).$mount('#app');
