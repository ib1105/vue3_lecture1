<template>
	<div>
		<h2>{{ teacher.name }}</h2>
		<h3>강의가 있습니까?</h3>
		<!-- <p>{{ teacher.lectures.length > 0 ? '있음 🙂' : '없음 🥲' }}</p> -->
		<!-- 이러한 코드를 더 사용한다면 비효율적이다. 이럴때 사용하는게 computed이다. -->
		<p>{{ hasLecture }}</p>
		<p>{{ hasLecture }}</p>
		<p>{{ existLecture() }}</p>
		<p>{{ existLecture() }}</p>
		<button v-on:click="counter++">Counter: {{ counter }}</button>
		<h2>이름</h2>
		<p>{{ fullName }}</p>
	</div>
</template>

<script>
import { computed, reactive, ref } from 'vue';

export default {
	setup() {
		const teacher = reactive({
			name: '짐코딩',
			lectures: ['HTML/CSS', 'JavaScript', 'Vue3'],
		});

		const hasLecture = computed(() => { //여러번쓰는걸 방지하기 위해 이렇게 computed를 사용한다.
			console.log('computed');
			return teacher.lectures.length > 0 ? '있음 🙂' : '없음 🥲';
		});

		const existLecture = () => { //같은 기능을 하는 메서드를 만든다. existLecture() 이렇게 ()를 붙여서 템플릿에서 사용하면 된다.
			//이렇게 해도 되지만 computed를 사용하는 것이 성능면에서 뛰어나다. computed는 캐시 기능이 있기 때문이다.
			console.log('method');
			return teacher.lectures.length > 0 ? '있음 🙂' : '없음 🥲';
		};

		const counter = ref(0);

		const firstName = ref('홍');
		const lastName = ref('길동');

		const fullName = computed({
			get() {
				return firstName.value + ' ' + lastName.value; //밑에서 firstname, lastname로 되어있는게 다시 get()에서 갱신이 되어서 {{fullname}}에 출력이된다.
			},
			set(value) {
				[firstName.value, lastName.value] = value.split(' '); //밑에 fullName.value = '짐 코딩'; 여기서 value로 쓴 값이 set()에 매개변수로 넘어온다.
			},
		});
		console.log('Console 출력: ', fullName.value);
		fullName.value = '짐 코딩';
		return {
			teacher,
			hasLecture,
			existLecture,
			counter,
			fullName,
		};
	},
};
</script>

<style lang="scss" scoped></style>
