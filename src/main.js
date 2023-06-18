import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import PostItem from '@/components/PostItem.vue'

const app = createApp(App)

//전역으로 등록
//단점. 해당 컴포넌트를 사용하지 않더라도 빌드시 항상 사용됨 -> 애플리케이션 파일이 불필요하게 커짐.
//app.component('PostItem', PostItem)

//여기서 provide 해주면 하위의 모든 곳에 message 뿌릴 수 있음.
//모든 컴포넌트에서 사용하는 라이브러리가 있다면 이렇게 여기서 provide하면 된다.
//app.provide('app-message', 'app message 입니다.')

app.mount('#app')
import 'bootstrap/dist/js/bootstrap.js'
