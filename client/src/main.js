import Vue from 'vue';
import VueToasted from 'vue-toasted';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

Vue.use(VueToasted, {
  iconPack: 'fontawesome'
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
