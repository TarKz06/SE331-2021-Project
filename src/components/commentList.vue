<template>
  <div class="review-container">
    <ul>
      <li v-for="(comment, index) in comments" :key="index">
        Name: {{ comment.name }}
        <br />
        Discription: "{{ comment.comment }}"
        <br />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    comments: {
      type: Array,
      required: true
    }
  }
}
</script>
