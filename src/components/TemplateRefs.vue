<template>
  <div class="container py-4">
    <input ref="input" type="text" />
    <p>{{ input }}</p>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'
export default {
  setup() {
    const input = ref(null)
    onMounted(() => {
      console.log('onMounted: ', input.value)
    })
    return { input }
  }
}
</script>

<style lang="scss" scoped></style>
