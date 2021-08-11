<template>
  <p>{{ info.fname }}</p>
  <p>{{ info.lname }}</p>

  <CommentFrom @submitted="addComment" />
  <h3>Comments</h3>
  <CommentList v-if="comment.length" :comments="comment" />
</template>

<script>
import CommentFrom from '@/components/commentForm.vue'
import CommentList from '@/components/commentList.vue'

export default {
  props: ['info'],
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
