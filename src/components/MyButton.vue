<template>
  <main>
    <div class="container py-4">
      <button class="btn btn-primary" type="button" v-bind="$attrs">My Button</button>
      <!-- v-bind=$attrs 를 하게되면 button에만 non-props속성이 바인딩한 것을 알 수 있다. -->
    </div>
  </main>
</template>

<script>
export default {
  inheritAttrs: false, //inheriAttrs:flase = 상속을 false 시킨다. div, button 으로 가는 상속을 false 시켰다.
  //button에는 상속을 하고싶다. ->v-bind="$attrs"
  setup(props, context) {
    return {}
  }
}
</script>

<style lang="scss" scoped></style>
