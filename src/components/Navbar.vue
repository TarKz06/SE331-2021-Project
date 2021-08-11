<template>
  <el-menu
    :default-active="activeIndex2"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <el-menu-item index="0">KEEMO-NUMBA-ONE</el-menu-item>
    <el-menu-item index="1">HOME</el-menu-item>
    <el-submenu index="2">
      <template #title>Patient List</template>
      <el-menu-item index="2-1">Page 1</el-menu-item>
      <el-menu-item index="2-2">Page 2</el-menu-item>
      <el-menu-item index="2-3">Page 3</el-menu-item>
    </el-submenu>
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
