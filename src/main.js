import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';


// elementPlus 对应vue3的引入方式
// const app = createApp(App)
// app.use(ElementPlus)
// app.mount('#app')
createApp(App).use(store).use(router).use(ElementPlus).mount('#app')
