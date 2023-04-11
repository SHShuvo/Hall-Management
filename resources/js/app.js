require('./bootstrap');

window.Vue = require('vue').default;
import index from './Index/Index.vue';

// Vue.component('example-component', require('./components/ExampleComponent.vue').default);

//for sweet alert
import Swal from "sweetalert2";
window.Swal = Swal;
const toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 4000
});
window.toast = toast;

import router from './router';
import VueRouter from 'vue-router'
Vue.use(VueRouter);

import vSelect from 'vue-select';
Vue.component('v-select', vSelect);

const app = new Vue({
    el: '#app',
    components:{index},
    router
});
