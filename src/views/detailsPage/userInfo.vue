<template>
  <p>{{ info.time }} on {{ info.date }} @ {{ info.location }}</p>
  <p>{{ info.description }}</p>
</template>

<script>
export default {
  props: ['info']
}
</script>
