// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import App from './App';
import router from './router';

Vue.config.productionTip = false;
Vue.use(Vuetify);
Vue.use(VueRouter);

/* eslint-disable no-unused-vars */
const app = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
