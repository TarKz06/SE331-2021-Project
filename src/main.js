import { createApp, reactive } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@fortawesome/fontawesome-free/js/all'
import ElementPlus from 'element-plus'
import installElementPlus from './plugins/element'
import 'nprogress/nprogress.css'

const app = createApp(App)
installElementPlus(app)
const GStore = reactive({flashMessage: ''})
app.use(store).use(router).use(ElementPlus).provide('GStore',GStore).mount('#app')