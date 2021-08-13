<script>
import Navbar from './components/Navbar.vue'
export default {
  components: { Navbar }
}
</script>
<template>
  <Navbar />
  <q-layout view="lHh Lpr lFf">
    <router-view />
  </q-layout>
 
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #6E7582;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  background-color: #e2e7f0;
}
#nav {
  padding: 30px;
}

#nav a { 
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
