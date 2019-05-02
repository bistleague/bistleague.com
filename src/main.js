import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import './stylus/main.styl';
import VueAnalytics from 'vue-analytics'

if(process.env.VUE_APP_GA_ID) {
    Vue.use(VueAnalytics, {
        id: process.env.VUE_APP_GA_ID
    });
}

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
