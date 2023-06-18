<template>
  <div class="card">
    <div class="card-header">Child Component</div>
    <div class="card-body"></div>
    <p>appMessge: {{ appMessage }}</p>
    <DeepChild></DeepChild>
  </div>
</template>

<script>
import { provide, readonly, ref, inject } from 'vue'
import DeepChild from './DeepChild.vue'
export default {
  components: {
    DeepChild
  },
  setup() {
    const appMessage = inject('app-message')
    return { appMessage }
  }
}
</script>

<style lang="scss" scoped></style>
