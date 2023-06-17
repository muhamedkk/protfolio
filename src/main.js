import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-free/css/all.css'
import VueHead from 'vue-head'
require('@/assets/js/js.js')
require('@/assets/style/style.css')
library.add(fas);



createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(VueHead)
  .use(router)
  .use(store)
  .use(vuetify)
  .mount('#app')
