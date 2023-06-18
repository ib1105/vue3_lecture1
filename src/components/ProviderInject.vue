<template>
  <div class="container py-4">
    <div class="card">
      <div class="card-header">ProviderInject Component</div>
      <div class="card-body">
        <button @click="count++">click</button>
        <p>appMessge: {{ appMessage }}</p>
        <Child></Child>
      </div>
    </div>
  </div>
</template>

<script>
import { provide, readonly, ref, inject } from 'vue'
import Child from './Child.vue'
export default {
  components: {
    Child
  },
  setup() {
    const staticMessage = 'static message'
    const message = ref('message')
    const count = ref(10)

    //message같은 반응형 데이터를 변경할 수 있는 메서드를 함께 제공할 수 있다.
    const updateMessage = (appendMessage) => {
      message.value = message.value + appendMessage
    }

    provide('static-message', staticMessage)
    provide('message', { message: readonly(message), updateMessage })
    provide('count', count)
    //provide를 이용하여 상위컴포넌트에서 보낼 데이터를 하위+하위컴포넌트에 inject로 받을 수 있다.

    const appMessage = inject('app-message')
    return { count, appMessage }
  }
}
</script>

<style lang="scss" scoped></style>
