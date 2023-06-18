<template>
  <div class="card">
    <div class="card-body">
      <!-- type: news, notice -->
      <span class="badge bg-secondary">{{ typeName }}</span>
      <h5 class="card-title red mt-2">{{ title }}</h5>
      <p class="card-text">
        {{ contents }}
      </p>
      <a href="#" class="btn" :class="isLikeClass">좋아요</a>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
export default {
  // 상위 컴포넌트에서 하위 컴포넌트로 props 전달하는 것은 단방향 방식이다. 하위에서 상위로 데이터 전달 못한다. 그리고 하위에서 데이터 수정도 안 된다.readonly 다.
  props: {
    type: {
      type: String,
      default: 'news',
      validator: (value) => {
        return ['news', 'notice'].includes(value)
      }
    },
    title: {
      type: String,
      required: true
    },
    contents: {
      type: String
      // required: true
    },
    isLike: {
      type: Boolean,
      default: false
    },
    obj: {
      type: Object,
      default: () => {}
    }
  },
  setup(props, context) {
    //console.log('porps.title: ', props.title)
    const isLikeClass = computed(() => (props.isLike ? 'btn-danger' : 'btn-outline-danger'))
    const typeName = computed(() => (props.type === 'news' ? '뉴스' : '공지사항'))
    return { isLikeClass, typeName }
  }
}
</script>

<!-- scoped 속성을 사용하면 이 style 속성을 이 스코프에서만 사용함 -->
<!-- module 속성을 붙이게 되면 template에서 class= '$style.' 을 사용할 수 있다. -->
<style></style>
