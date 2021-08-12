<template>
  <form class="review-form" @submit.prevent="onSubmit">
    <label for="name">Name: </label>
    <input id="name" v-model="name">
    <br>
    <label for="comment">Comment: </label>
    <textarea id="comment" v-model="comment"></textarea>
    <input class="button" type="submit" value="Submit"/>
  </form>
</template>

<script>
export default {
  inject:['GStore'],
  data() {
    return {
      comment: '',
      name: ''
    }
  },
  methods: {
    onSubmit() {
      if (this.comment === ''||this.name === '') {
        alert('Comment is incomplete. Please fill out every field.')
        return
      }
      let productReview = {
        comment: this.comment,
        name: this.name
      }
      this.$emit('submitted', productReview)
      this.comment = ''
      this.name = ''
    },
  }
}
</script>
