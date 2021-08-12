<template>
  <el-row :span="12">
    <el-col :span="24">
      <el-card>
        <img :src="plist.profileimg" />
        <div style="padding: 14px">
          <router-link :to="{ name: 'userInfo', params: { id: plist.id } }">
          <span>{{plist.fname}}</span>
          <span>{{plist.lname}}</span>
          </router-link>
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

