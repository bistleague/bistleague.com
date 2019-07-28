import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import './stylus/main.styl';
import VueAnalytics from 'vue-analytics'
import VueRouter from 'vue-router'

// Setup routes
const routes = [
    {path: "/", component: () => import('./components/Home')},
    {path: "/competition", alias: ["/competition/faq"], component: () => import('./components/Competition')},
    {path: "/login", component: () => import('./components/Login')},
];

const router = new VueRouter({
    routes: routes,
    mode: 'history',
});

Vue.use(VueRouter);

if(process.env.VUE_APP_GA_ID) {
    Vue.use(VueAnalytics, {
        id: process.env.VUE_APP_GA_ID
    });
}

Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App),
}).$mount('#app');
