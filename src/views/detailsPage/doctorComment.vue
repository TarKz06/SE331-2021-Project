<template>
  <h3>Comments</h3>
  <CommentFrom @submitted="addComment" v-on:submitted="flash" />
  <br>
  <q-banner inline-actions class="text-white bg-secondary" id="flashMessage" v-if="GStore.flashMessage">
    {{ GStore.flashMessage }}
  </q-banner>
  <br>
  <CommentList v-if="comment.length" :comments="comment" />

  
</template>

<script>
import CommentFrom from '@/components/commentForm.vue'
import CommentList from '@/components/commentList.vue'

export default {
  props: ['plist'],
  inject: ['GStore'],
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
    },
    flash() {
      this.GStore.flashMessage =
        'You are successfully commented for ' +this.plist.fname +' ' +this.plist.lname
      setTimeout(() => {
        //After 3 seconds remove it
        this.GStore.flashMessage = ''
      }, 2000)
    }
  }
}
</script>