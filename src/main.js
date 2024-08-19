import './assets/main.scss'
import './assets/tailwinds.css'
import './router/index'

import { createApp } from 'vue'
import App from './App.vue'
import GlobalDialog from './components/GlobalDialog.vue';

const app = createApp(App);
app.component("GlobalDialog", GlobalDialog);
app.mount('#app')
