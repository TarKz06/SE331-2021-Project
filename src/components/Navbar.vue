<template>
  <el-menu
    :default-active="activeIndex2"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    background-color="#D9B3AB"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <el-menu-item index="0">
      <router-link
        style="
          color: black;
          font-family: 'Courier New', monospace;
          font-size: 20px;
          font-weight: bold;
        "
        :to="{ name: 'PatientList' }"
      >
        HOME
      </router-link>
    </el-menu-item>
    <el-menu-item index="1">
      <router-link
        style="
          color: black;
          font-family: 'Courier New', monospace;
          font-size: 20px;
          font-weight: bold;
        "
        :to="{ name: 'About' }"
      >
        KEEMO-NUMBA-ONE
      </router-link>
    </el-menu-item>
  </el-menu>
</template>
<script>
export default {
  name: 'Navbar',
  props: {
    plist: {
      type: Object,
      required: true
    }
  }
}
</script>
<style lang="postcss" scoped></style>
