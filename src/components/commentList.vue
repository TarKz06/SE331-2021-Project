<template>
  <div class="review-container">
    <center>
      <div v-for="(comment, index) in comments" :key="index">
      <q-card style="max-width: 500px" class="my-card bg-secondary ">
        <div>
          <q-avatar size="100px" class="text-white">
              <span class="material-icons-outlined">
              account_circle
              </span>
          </q-avatar>
          <q-card-section >
            <div class="text-h6 text-white"><b>{{ comment.name }}</b></div>
          </q-card-section>

          <q-separator />

          <q-card-section class="bg-white">
            "{{ comment.comment }}"
          </q-card-section>
        </div>
          
      </q-card> 
      <br>
      </div>
    </center>
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