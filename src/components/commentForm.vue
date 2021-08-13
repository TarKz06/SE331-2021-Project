<template>
<div class="comment">
  <div class="q-pa-md">
    <center>
    <div class="q-gutter-y-md column" style="max-width: 500px" >
      <form class="review-form" @submit.prevent="onSubmit">
        <q-input
        label="Add a comment..."
            v-model="comment"
            filled
            type="textarea"
            id="comment"
        />
        <br>
        <q-input filled v-model="name" label="Name :" :dense="dense" id="name"/>
        
          <br>
        <q-btn class="input" type="submit" label="Submit" color="secondary" />
      </form>
    </div>
    </center>
  </div>
  </div>
  <q-separator />
</template>

<script>
export default {
  inject: ['GStore'],
  data() {
    return {
      comment: '',
      name: ''
    }
  },
  methods: {
    onSubmit() {
      if (this.comment === '' || this.name === '') {
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
    }
  }
}
</script>
<style>
.comment{}
</style>