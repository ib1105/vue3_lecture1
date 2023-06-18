<template>
  <div>
    <label>
      {{ label }}
      <input v-model="value" type="text" />
    </label>
  </div>
</template>

<script>
import { computed } from 'vue'

export default {
  // modelValue라는 props로 값을 입력받아 update:modelValue로 이벤트를 발생시킬 수 있다.
  //이러한 props와 event를 구현해서 컴포넌트에서 v-model을 구현할 수 있다.

  props: ['title', 'label'],
  emits: ['update:title'],
  setup(props, { emit }) {
    const value = computed({
      get() {
        return props.title
      },
      set(value) {
        emit('update:title', value)
      }
    })
    return { value }
  }
}
</script>

<style lang="scss" scoped></style>
