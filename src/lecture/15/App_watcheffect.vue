<template>
	<div>
		<form @submit.prevent>
			<input v-model.lazy="title" type="text" placeholder="Title" />
			<textarea v-model.lazy="contents" placeholder="Contents"></textarea>
			<hr />
			<button @click="save(title, contents)">저장</button>
		</form>
	</div>
</template>

<script>
import { ref, watchEffect } from 'vue';

export default {
	setup() {
		const title = ref('');
		const contents = ref('');

		const save = (title, contents) => {
			console.log(`저장되었습니다. title: ${title}, contents: ${contents}`);
		};
		//watchEffect는 즉시변경, wathcEffect는 watch와 다르게 최초에 한 번 즉시 실행이다. 그런데 watch에 immediate함수를 넣으면 즉시 실행한다.
		watchEffect(() => {
			console.log('watchEffect');
			save(title.value, contents.value);
		});
		return { title, contents, save };
	},
};
</script>

<style lang="scss" scoped></style>
