<template>
  <form class="review-form" @submit.prevent="onSubmit">
    <label for="comment">Doctor's comment: </label>
    <textarea id="comment" v-model="comment"></textarea>
    <input class="button" type="submit" value="Submit" />
  </form>
</template>

<script>
export default {
  data() {
    return {
      comment: ''
    }
  },
  methods: {
    onSubmit() {
      if (this.comment === '') {
        alert('Comment is incomplete. Please fill out every field.')
        return
      }
      let productReview = {
        comment: this.comment
      }
      this.$emit('submitted', productReview)
      this.comment = ''
    }
  }
}
</script>
