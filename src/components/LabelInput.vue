<template>
  <div>
    <label class="form-label" id="child-id">
      {{ label }}
    </label>
    <input v-model="value" type="text" v-bind="$attrs" class="form-control" />
    <!-- vue3에서는 위의 <label>, <input> 와 같이 다중루트노드를 가질 수 있다.-->
    <!-- 이렇게 다중 루트에 상속을 하는 경우 어느 루트에 상속이 되는지 v-bind로 명시해줘야 한다. -->
    <!-- TheView에서 보낸 클래스들은  v-bind를 사용한 <input> 태그에 상속이 되었다. -->
  </div>
</template>

<script>
import { computed } from 'vue'

export default {
  // modelValue라는 props로 값을 입력받아 update:modelValue로 이벤트를 발생시킬 수 있다.
  //이러한 props와 event를 구현해서 컴포넌트에서 v-model을 구현할 수 있다.

  props: ['modelValue', 'label'],
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    //          :modelValue="first" -> 상위에서 하위
    //@update:modelValue="newValue => first = newValue" -> 하위에서 상위
    //위 내용을 computed로 바꿔 사용할 수도 있음. 기존 사용법 보려면 UserName.vue 참고

    const value = computed({
      get() {
        return props.modelValue
      },
      set(value) {
        emit('update:modelValue', value)
      }
    })
    return { value }
  }
}
</script>

<style lang="scss" scoped></style>
