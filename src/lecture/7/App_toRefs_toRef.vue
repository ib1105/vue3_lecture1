<template>
	<div>
		<p>author: {{ author }}</p>
		<p>title: {{ title }}</p>
	</div>
</template>

<script>
import { reactive, toRef, toRefs } from 'vue';

export default {
	setup() {
		const book = reactive({
			author: 'Vue Team',
			year: '2020',
			title: 'Vue 3 Guide',
			description: '당신은 지금 바로 이 책을 읽습니다  ;)',
			price: '무료',
		});

		//const {author, title} = book; //이렇게 구조분해 할당을 하면 author, title는 단순히 string 형태이다.(반응성을 잃어버린 형태)
		//반응성을 잃지 않으면서 구조분해 할당을 하는방법은? toref, torefs 이다.

		// const { author, title } = toRefs(book); //이렇게 작성하면 구조분해 할당할때 반응형 할당이 되어 console 에서 값을 변경하면 바로 적용이 된다.
		//즉, toRefs를 사용하면 위에 정의한 book에 있는 속성과 구조분해해서 재할당한 이러한 반응형 상태는 서로 동기화가 된다.
		const author = toRef(book, 'author'); //만약 구조분해할당 말고 book객체에서 하나만 들고오고 싶을땐 toRef를 사용하면 된다.
		const title = toRef(book, 'title');
		//이렇게 반응형 객체에서 속성을 가져오고 싶을때 반응형을 잃지 않고 싶을때는 toRefs나 toRef를 사용하면 된다.
		return { author, title, book };
	},
};
</script>

<style lang="scss" scoped></style>
