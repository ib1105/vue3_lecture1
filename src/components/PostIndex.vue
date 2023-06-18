<template>
  <div>
    <main>
      <div class="container py-4">
        <PostCreate @create-post="createPost"></PostCreate>
        <hr class="my-4" />
        <div class="row g-3">
          <div class="col col-4" v-for="post in posts" :key="post.id">
            <AppCard
              :title="post.title"
              :contents="post.contents"
              :type="post.type"
              :is-like="post.isLike"
              :obj="obj"
            ></AppCard>
          </div>
        </div>
        <hr class="my-4" />
        <!-- <LabelInput
          :model-value="username"
          @update:model-value="(value) => (username = value)"
        ></LabelInput> -->

        <!-- v-model은 아래와 같이 변화된다.
          ※그리고 또한, v-model을 사용하려면 하위컴포넌트에서 아래처럼 정의하면 된다.
        <
          :modelValue="first" -> 상위에서 하위
          @update:modelValue="newValue => first = newValue" -> 하위에서 상위
        />
        -->
        <LabelInput
          v-model="username"
          label="이름"
          class="parent-class"
          style="color: red"
          id="parent-id"
        ></LabelInput>
        <!-- 자식컴포넌트에 class, style, id가 정의되어 있고, 부모컴포넌트에도 정의가 되어있으면 자식컴포넌트의 속성을 부모컴포넌트에 merge한다.
        그리고 class, style, id 같은 건 props로 내려가지 않는다. -->
        <LabelTitle v-model:title="username" label="제목"></LabelTitle>Post
        <UserName v-model:firstname="firstname" v-model:lastname="lastname"></UserName>
        <MyButton @click="sayHello" class="my-button" id="my-button"></MyButton>
        <!-- @click 이벤트는 html에서 사용하는 이벤트이다. 이렇게 하위컴포넌트 태그에 @click 같이 non-props 속성을 주면
        MyButton에서 root속성에 click 이벤트를 상위컴포넌트로 emit 하는 것과 같다. -->
        <!-- non-prop 속성은 props 또는 event 에 명시적으로 선언되지 않은 속성 또는 이벤트이다.
        예를 들어 class, style, id 같은 것들이 있다. https://vueframework.com/docs/v3/ko/ko-KR/guide/component-attrs.html#%E1%84%89%E1%85%A9%E1%86%A8%E1%84%89%E1%85%A5%E1%86%BC-%E1%84%89%E1%85%A1%E1%86%BC%E1%84%89%E1%85%A9%E1%86%A8-->
      </div>
    </main>
  </div>
</template>

<script>
import { reactive, ref } from 'vue'
import AppCard from './AppCard.vue'
import PostCreate from './PostCreate.vue'
import LabelInput from './LabelInput.vue'
import LabelTitle from './LabelTitle.vue'
import UserName from './UserName.vue'
import MyButton from './MyButton.vue'
export default {
  components: {
    AppCard,
    PostCreate,
    LabelInput,
    LabelTitle,
    UserName,
    MyButton
  },
  setup() {
    const obj = reactive({
      title: '제목2',
      contents: '내용2'
    })
    const posts = reactive([
      { id: 1, title: '제목1', contents: '내용1', isLike: true, type: 'news' },
      { id: 2, title: '제목2', contents: '내용2', isLike: true, type: 'news' },
      { id: 3, title: '제목3', contents: '내용3', isLike: true, type: 'news' },
      { id: 4, title: '제목4', contents: '내용4', isLike: false, type: 'notice' },
      { id: 5, title: '제목5', contents: '내용5', isLike: false, type: 'notice' }
    ])
    const createPost = (newPost) => {
      console.log('createPost')
      console.log('newPost: ', newPost)
      posts.push(newPost)
    }
    const username = ref('')
    const firstname = ref('')
    const lastname = ref('')
    const sayHello = () => {
      alert('안녕하세요')
    }
    return { obj, posts, createPost, username, firstname, lastname, sayHello }
  }
}
</script>

<style lang="scss" scoped></style>
