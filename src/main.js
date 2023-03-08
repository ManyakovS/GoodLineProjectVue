import { createApp } from 'vue'
import App from './App.vue'
import VueMobileDetection from "vue-mobile-detection";
import router from './router/router'
import store from '@/store';
import Vue3TouchEvents from "vue3-touch-events";

const app = createApp(App)

app
    .use(Vue3TouchEvents)
    .use(store)
    .use(router)
    .use(VueMobileDetection)
    .mount('#app');
