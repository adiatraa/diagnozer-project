import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createVuetify } from 'vuetify'

import App from './App.vue'
import router from './router'
import 'vuetify/styles'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faAt,faCode,faArrowRight,faMaximize,faUser, faUserSecret, faLock, faEye, faEyeSlash, faRightToBracket, faAngleDoubleLeft, faAnglesLeft, faBars, faHouse, faMagnifyingGlass, faFileWaveform, faNotesMedical, faKitMedical, faStethoscope, faGear, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'
library.add(faAt, faGithub,faLinkedin,faCode,faArrowRight,faMaximize, faUserSecret, faLock, faEye, faEyeSlash, faRightToBracket, faAngleDoubleLeft, faEnvelope, faAnglesLeft, faBars, faHouse, faMagnifyingGlass, faFileWaveform, faNotesMedical, faKitMedical, faStethoscope, faGear, faArrowRightFromBracket, faUser)

const vuetify = createVuetify({
    components,
    directives,
  })
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(bootstrap)
app.use(library)
app.use(vuetify)
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
