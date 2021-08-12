<template>
    <h3>Comments</h3>
    <CommentFrom @submitted="addComment" />
    <CommentList v-if="comment.length" :comments="comment" />
</template>

<script>
import CommentFrom from '@/components/commentForm.vue'
import CommentList from '@/components/commentList.vue'

export default {
  props: ['plist'],
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