import App from '@/js/components/App.vue'
import Vue from 'vue'
import router from '@/js/router.js'


const app = new Vue({
    el: '#app',
    components: {App},
    template: '<App />',
    router
});
