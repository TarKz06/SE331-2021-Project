<template>
  <div v-if="plist">
    <div id="nav">
      
      <router-link :to="{ name: 'userInfo', params: { id } }">
        <el-button type="primary" round icon="el-icon-s-custom">User Information</el-button>
      </router-link>
      |
      <router-link :to="{ name: 'vaccineInfo', params: { id } }">
        <el-button type="primary" round icon="el-icon-menu">Vaccine Menu</el-button>
      </router-link>
      |
      <router-link :to="{ name: 'doctorComment', params: { id } }">
        <el-button type="primary" round icon="el-icon-edit">Doctor Menu</el-button>
      </router-link>
    </div>
    <router-view :plist="plist" />
  </div>
</template>

<script>
import patientService from '@/services/patientService.js'

export default {
  props: ['id'],
  data() {
    return {
      plist: null
    }
  },
  created() {
    patientService
      .getEvent(this.id)
      .then((response) => {
        this.plist = response.data
      })
      .catch((error) => {
        if (error.response && error.response.status == 404) {
          this.$router.push({
            name: '404Resource',
            params: { resource: 'plist' }
          })
        } else {
          this.$router.push({ name: 'NetworkError' })
        }
      })
  }
}
</script>
