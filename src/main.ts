import { createApp } from 'vue'
import 'normalize.css'
import '@/assets/css/index.less'
import App from './App.vue'
import router from './router'
import pinia from './store'
import registerIcons from './global/registerIcons'

// createApp(App).use(router).use(pinia).mount('#app')

const app = createApp(App)
app.use(registerIcons)
app.use(pinia) //default导出的registerPinia,所以还是可以起名叫pinia

app.use(router)
app.mount('#app')
