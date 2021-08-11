<template>
  <div v-if="info">
    <div id="nav">
      <router-link :to="{ name: 'userInfo', params: { id } }">
        User Information
      </router-link>
      |
      <router-link :to="{ name: 'vaccineInfo', params: { id } }">
        Vaccine Menu
      </router-link>
    </div>
    <router-view :info="info" />
  </div>
</template>

<script>
import patientService from '@/services/patientService.js'

export default {
  props: ['id'],
  data() {
    return {
      info: null
    }
  },
  created() {
    patientService
      .getEvent(this.id)
      .then((response) => {
        this.info = response.data
      })
      .catch((error) => {
        if (error.response && error.response.status == 404) {
          this.$router.push({
            name: '404Resource',
            params: { resource: 'info' }
          })
        } else {
          this.$router.push({ name: 'NetworkError' })
        }
      })
  }
}
</script>
