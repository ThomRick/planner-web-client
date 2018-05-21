import VueRouter from 'vue-router';
import Home from './components/Home';
import Plannings from './components/Plannings';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/plannings',
    name: 'Plannings',
    component: Plannings,
  },
];

export default new VueRouter({ routes });
