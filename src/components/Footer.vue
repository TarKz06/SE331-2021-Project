<template style="background: #777; text-align: center; padding: 5%">
  <p class="cp-text">© Copyright 2021 Company Name. Keemo-Numba-One</p>
</template>
<script>
export default {
  name: 'Footer',
  props: {
    plist: {
      type: Object,
      required: true
    }
  }
}
</script>
<style>
.cp-text {
  color: rgba(0, 0, 0, 0.7);
  text-shadow: 0 1px rgba(255, 255, 255, 0.1);
  font-size: 15px;
}
</style>
