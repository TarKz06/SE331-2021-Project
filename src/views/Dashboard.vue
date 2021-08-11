<template>
  <h1>Test {{ collapsed ? 'closed' : 'open' }} la</h1>
  <button @click="toggleSidebar">Toggle Sidebar</button>
</template>

<script>
import { collapsed, toggleSidebar } from '@/components/sidebar/state'

export default {
  setup() {
    return { collapsed, toggleSidebar }
  }
}
</script>
