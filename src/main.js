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
import { faAt, faUserSecret } from '@fortawesome/free-solid-svg-icons'
const app = createApp(App)
library.add(faAt)

app.use(createPinia())
app.use(router)
app.use(bootstrap)
app.use(library)
app.use(FontAwesomeIcon)
app.use(faUserSecret, faAt)

app.mount('#app')
