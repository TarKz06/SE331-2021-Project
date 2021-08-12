<template>
  <h1>Patient List</h1>

  <div class="plists">
    <PatientCard v-for="plist in plists" :key="plist.id" :plist="plist" />

    <div class="pagination">
      <router-link
        id="page-prev"
        :to="{ name: 'PatientList', query: { page: page - 1 } }"
        rel="prev"
        v-if="page != 1"
      >
        Prev Page</router-link
      >

      <router-link
        id="page-next"
        :to="{ name: 'PatientList', query: { page: page + 1 } }"
        rel="next"
        v-if="hasNextPage"
      >
        Next Page</router-link
      >
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import PatientCard from '@/components/PatientCard.vue'
import patientService from '@/services/patientService.js'

export default {
  name: 'PatientList',
  props: {
    page: {
      type: Number,
      required: true
    }
  },
  components: {
    PatientCard // register it as a child component
  },
  data() {
    return {
      plists: null,
      totalPlist: 0
    }
  },
  // eslint-disable-next-line no-unused-vars
  beforeRouteEnter(routeTo, routeFrom, next) {
    patientService
      .getEvents(5, parseInt(routeTo.query.page) || 1)
      .then((response) => {
        next((comp) => {
        comp.plists = response.data
        comp.totalPlist = response.headers['x-total-count'] // <--- Store it
        })
      })
      .catch(() => {
        next({ name: 'NetworkError' })
      })
  },
  beforeRouteUpdate(routeTo, routeFrom, next) {
    patientService
      .getEvents(5, parseInt(routeTo.query.page) || 1)
      .then((response) => {
        this.plists = response.data
        this.totalPlist = response.headers['x-total-count'] // <--- Store it
        next()
      })
      .catch(() => {
        next({ name: 'NetworkError' })
      })
  },
  computed: {
    hasNextPage() {
      let totalPages = Math.ceil(this.totalPlist / 5)
      return this.page < totalPages
    }
  }
}
</script>
<style scoped>
.plists {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.pagination {
  display: flex;
  width: 290px;
}
.pagination a {
  flex: 1;
  text-decoration: none;
  color: #2c3e50;
}
#page-prev {
  text-align: left;
}
#page-next {
  text-align: right;
}
</style>
