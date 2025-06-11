import Vue from 'vue'
import App from './App.vue'
import './assets/css/global.css'

window.Event = new class {
    constructor () {
        this.vue = new Vue();
    }

    fire ( event_name, data = null ) {
        this.vue.$emit( event_name, data );
    }

    listen ( event_name, callback ) {
        this.vue.$on( event_name, callback );
    }
};

new Vue({
  el: '#app',
  render: h => h(App)
})
