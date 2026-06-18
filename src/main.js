import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import { vLazy } from './directives/vLazy.js'
import './assets/css/base.css'
import './assets/css/components.css'

const app = createApp(App)
app.use(router)
app.directive('lazy', vLazy)
app.mount('#app')
