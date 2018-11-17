import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import VueLodash from 'vue-lodash';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

Vue.config.productionTip = false;

Vue.use(VueLodash);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');