import Vue from 'vue';
import App from './App.vue';

// Bootstrap
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
Vue.use(BootstrapVue);

// reset
import './reset.css';

// Infinite Loading
import InfiniteLoading from 'vue-infinite-loading';
Vue.use(InfiniteLoading, { /* options */ });

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');

