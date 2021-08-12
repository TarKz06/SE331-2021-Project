<template>
  <el-row :span="12">
    <el-col :span="24">
      <el-card>
        <img :src="plist.profileimg" />
        <div style="padding: 14px">
          <span>{{plist.lname}}</span>
          <span>{{plist.fname}}</span>
        </div>
      </el-card>
    </el-col>
  </el-row>
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
.image {
}
</style>
