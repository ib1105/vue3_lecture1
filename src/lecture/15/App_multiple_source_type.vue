<template>
  <div></div>
</template>

<script>
import { reactive, ref, watch } from 'vue'

export default {
  setup() {
    const x = ref(0)
    const y = ref(0)

    const obj = reactive({
      count: 0
    })

    // watch(
    // 	() => x.value + y.value,
    // 	(sum, oldValue) => {
    // 		console.log('sum: ', sum);
    // 		console.log('oldValue: ', oldValue);
    // 	},
    // );

    // watch([x, y], ([newX, newY]) => {
    // 	console.log(newX, newY);
    // });
    console.log(typeof obj.count)
    // watch(
    // 	() => obj.count,
    // 	(newValue, oldValue) => {
    // 		console.log('newValue: ', newValue);
    // 	},
    // );
    // watch(obj, (newValue, oldValue) => {
    // 	console.log('newValue: ', newValue);
    // 	console.log('oldValue: ', oldValue);
    // });

    const person = reactive({
      name: '홍길동',
      age: 30,
      hobby: '운동',
      obj: {
        count: 0
      }
    })

    // watch(person, newValue => {
    // 	console.log('newValue: ', newValue);
    // });
    console.log(typeof person.obj)
    watch(
      //속성을 변경하고 싶을 때는 get()함수 사용, 즉, get()함수는 get()함수로 받은 값이 바뀌었나, 안바뀌었나 이걸 체크한다.
      //이렇게 watch함수는 반응형 데이터를 감지하다가 반응형 데이터에 변경이 일어났을 때 이러한 콜백함수를 실행시켜준다.
      () => person.obj,
      (newValue) => {
        console.log('newValue: ', newValue)
      }
    )
    return { x, y, obj, person }
  }
}
</script>

<style lang="scss" scoped></style>
