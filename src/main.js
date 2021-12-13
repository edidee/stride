import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'
import Mono from 'vue-mono'
import store from './store'

createApp(App).use(router).use(store).use(Mono, { publicKey: 'test_pk_IubxmMzyXJUsrbuPiqm5' }).mount('#app')
