import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import './registerServiceWorker'

Vue.use(VueRouter)
//BoostrapVue
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

//Fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faDesktop, faHandsHelping, faTasks, faCode, faPaintBrush, faShoppingCart, faMapMarkerAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faGithub, faLinkedin, faHtml5, faCss3Alt, faJs} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
Vue.component('font-awesome-icon', FontAwesomeIcon)

//Vue Meta
import VueMeta from 'vue-meta'
Vue.use(VueMeta)

//AOS
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
    offset: 50,
    delay: 0,
    duration: 1000,
});

//Particles
// import VueParticles from 'vue-particles'
// Vue.use(VueParticles)

library.add(
  faHome, 
  faDesktop, 
  faTasks, 
  faHandsHelping, 
  faTwitter, 
  faGithub, 
  faLinkedin, 
  faCode, 
  faPaintBrush, 
  faShoppingCart, 
  faHtml5, 
  faCss3Alt, 
  faJs, 
  faMapMarkerAlt, 
  faEnvelope
),

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
