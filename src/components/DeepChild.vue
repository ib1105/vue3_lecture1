<template>
  <div class="card">
    <div class="card-header">Deep Child Component</div>
    <div class="card-body"></div>
    <p>staticMessge : {{ staticMessage }}</p>
    <p>message : {{ message }}</p>
    <p>count : {{ count }}</p>
  </div>
</template>

<script>
import { inject } from 'vue'
export default {
  setup() {
    //inject 파라미터에서는 값이 안넘어올 것을 대비하여 두번재 값에 default parameter을 설정할 수 있다.
    const staticMessage = inject('static-message', 'default message')
    const { message, updateMessage } = inject('message')
    updateMessage('!!')
    const count = inject('count')

    return { staticMessage, message, count }
  }
}
</script>

<style lang="scss" scoped></style>
