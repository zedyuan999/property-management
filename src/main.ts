import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { setupStore } from '@/store'

import './index.css'

const app = createApp(App)
app.use(router)
setupStore(app)

const setupNaiveUI = () => {
  const meta = document.createElement('meta')
  meta.name = 'naive-ui-style'
  document.head.appendChild(meta)
}

setupNaiveUI()




app.mount('#app')
