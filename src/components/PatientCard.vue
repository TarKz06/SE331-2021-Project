<template>
  <!-- <el-row :span="12">
    <el-col :span="24">
      <el-card>
        <img :src="plist.profileimg" />
        <div style="padding: 14px">
          <router-link :to="{ name: 'userInfo', params: { id: plist.id } }">
            <span>{{ plist.fname }}</span>
            <span>{{ plist.lname }}</span>
          </router-link>
        </div>
      </el-card>
    </el-col>
  </el-row> -->
  <q-card class="my-card">
    <q-img :src="plist.profileimg">
      <div class="absolute-bottom text-subtitle2 text-center">
        <router-link :to="{ name: 'userInfo', params: { id: plist.id } }">
          {{ plist.fname }}
          {{ plist.lname }}
        </router-link>
        <div v-if="plist.status == '1'">
          Already Inject {{ plist.status }} dose
          <span class="material-icons-outlined"> medication </span>
        </div>
        <div v-else>
          Already Inject {{ plist.status }} dose
          <span class="material-icons-outlined"> medication </span
          ><span class="material-icons-outlined"> medication </span>
        </div>
      </div>
    </q-img>
  </q-card>
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
.my-card {
  width: 400px;
}
a:link {
  color: rgb(148, 141, 141);
  padding: 15px 25px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
}
a:hover,
a:active {
  background-color: wheat;
}
</style>
