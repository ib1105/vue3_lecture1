<template>
  <div class="row g-3">
    <!-- @click="$emit('createPost', 1, 2, 3, '김길동')" -->
    <div class="col col-2">
      <select v-model="type" class="form-select" aria-label="Default select example">
        <option selected>Open this select menu</option>
        <option value="new">뉴스</option>
        <option value="notice">공지사항</option>
      </select>
    </div>
    <div class="col col-8"><input v-model="title" type="text" class="form-control" /></div>
    <div class="col col-2 d-grid">
      <button class="btn btn-primary" @click="createPost">추가</button>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  //자식 컴포넌트에서 이벤트를 발생시키고 싶다면 emits 을 사용하면 된다.
  //emits: ['createPost'],
  emits: {
    createPost: (newPost) => {
      if (!newPost.type) {
        return false
      } else if (!newPost.title) {
        return false
      }
      return true
    }
  },
  setup(props, { emit }) {
    const type = ref('news')
    const title = ref('')
    const createPost = () => {
      const newPost = {
        type: type.value,
        title: title.value
      }
      emit('createPost', title.value)
      type.value = 'news'
      title.value = ''
    }
    return { createPost, title, type }
  }
}
</script>

<style lang="scss" scoped></style>
