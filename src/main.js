import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faDesktop, faHandsHelping, faTasks, faCode, faPaintBrush, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faGithub, faLinkedin, faHtml5, faCss3Alt, faJs} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faHome, faDesktop, faTasks, faHandsHelping, faTwitter, faGithub, faLinkedin, faCode, faPaintBrush, faShoppingCart, faHtml5, faCss3Alt, faJs),

Vue.component('font-awesome-icon', FontAwesomeIcon)

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

require('./plugins/jquery');