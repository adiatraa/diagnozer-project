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
import { faAt, faUser, faUserSecret, faLock, faEye, faEyeSlash, faRightToBracket } from '@fortawesome/free-solid-svg-icons'
library.add(faAt, faUserSecret, faLock, faEye, faEyeSlash, faRightToBracket)

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(bootstrap)
app.use(library)
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
