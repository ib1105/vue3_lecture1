<template>
	<div>
		<p>{{ message }}</p>
				<!-- template에서 사용할때는 return 된 형태는 자동으로 내부적으로 언래핑된다. 
			그래서 value안에 있는 값을 메세지로 대입을 하게 된다. -->
		<button v-on:click="addMessage">add click</button>
	</div>
</template>

<script>
import { ref } from 'vue';

export default {
	setup() {
		let message = ref('Hello Vue!');
		//자바스크립트에서 ref함수를 사용할 때는 매개변수에 .value를 사용하여 접근하면 된다.

		const addMessage = () => {
			message.value = message.value + '!';
		};
		console.log(message);
		console.log('message: ', message.value);
		console.log('message typeof: ', typeof message.value);
		return {
			message,
			addMessage,
		};
	},
};
</script>

<style lang="scss" scoped></style>
