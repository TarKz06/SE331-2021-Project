<template>
    <div id="flashMessage" v-if="GStore.flashMessage">
        {{GStore.flashMessage}}
    </div>
    <h3>Comments</h3>
    <CommentFrom @submitted="addComment" />
    <CommentList v-if="comment.length" :comments="comment" />
</template>

<script>
import CommentFrom from '@/components/commentForm.vue'
import CommentList from '@/components/commentList.vue'

export default {
  props: ['plist'],
  inject:['GStore'],
  components: {
    CommentFrom,
    CommentList
  },
  data() {
    return {
      comment: []
    }
  },
  methods: {
    addComment(doc) {
      this.comment.push(doc)
    }
  }
}
</script>

<style>
@keyframes yellowfade{
  from {
    background: yellow;
  }
  to {
    background: transparent;
  }
}

#flashMessage {
  animation-name: yellowfade;
  animation-duration: 3s;
}
</style>