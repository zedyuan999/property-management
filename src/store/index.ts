import { createPinia } from 'pinia'
import { App } from 'vue'

export const createStore = (app: App) => {
  app.use(createPinia)
}