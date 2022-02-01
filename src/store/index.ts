import { createPinia } from 'pinia'
import { App } from 'vue'
import User from './user'
import { common } from '@/types'

export const setupStore = (app: App) => {
  app.use(createPinia())
  registerStore()
}

const appStore: common.StoreType = {}

const registerStore = () => {
  appStore.user = User()
}

export default appStore