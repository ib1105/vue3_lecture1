import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import PostItem from '@/components/PostItem.vue'

const app = createApp(App)

//전역으로 등록
//단점. 해당 컴포넌트를 사용하지 않더라도 빌드시 항상 사용됨 -> 애플리케이션 파일이 불필요하게 커짐.
//app.component('PostItem', PostItem)

app.mount('#app')
import 'bootstrap/dist/js/bootstrap.js'
