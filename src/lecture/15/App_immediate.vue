<template>
	<div>
		<p>{{ message }}</p>
		<p>{{ reverseMessage }}</p>
	</div>
</template>

<script>
import { ref, watch } from 'vue';

//computed 와 watch의 차이점
//computed = 예를 들어서 메세지에 의해서 어떤 값이 셋팅이 되어야 할 때는 computed 사용
//watch = 반응형 데이터가 변경되는 시점에 (조금 복잡한 로직) 사용할 때는 watch가 유용
export default {
	setup() {
		const message = ref('Hello Vue3');
		const reverseMessage = ref('');

		const reverseFunction = () => {
			console.log('즉시실행함!!!');
			reverseMessage.value = message.value.split('').reverse().join('');
		};
		watch(message, reverseFunction);
		reverseFunction();
		return { message, reverseMessage };
	},
};
</script>

<style lang="scss" scoped></style>
