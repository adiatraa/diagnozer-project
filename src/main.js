import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faAt, faUser, faUserSecret, faLock, faEye, faEyeSlash, faRightToBracket, faAngleDoubleLeft, faAnglesLeft, faBars, faHouse, faMagnifyingGlass, faFileWaveform, faNotesMedical, faKitMedical, faStethoscope, faGear, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'
library.add(faAt, faUserSecret, faLock, faEye, faEyeSlash, faRightToBracket, faAngleDoubleLeft, faEnvelope, faAnglesLeft, faBars, faHouse, faMagnifyingGlass, faFileWaveform, faNotesMedical, faKitMedical, faStethoscope, faGear, faArrowRightFromBracket)

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(bootstrap)
app.use(library)
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
