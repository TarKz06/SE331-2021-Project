<template>
  <div class="plist-card">
    <span>@{{ plist.fname }} on {{ plist.lname }}</span>
  </div>
</template>

<script>
export default {
  name: 'PatientCard',
  props: {
    plist: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.plist-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}
.plist-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
</style>
