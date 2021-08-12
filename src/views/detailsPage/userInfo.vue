<template>
  <div class="common-layout">
    <div class="profileTitle">
      <h1>Patient Information</h1>
    </div>
    <el-container style="text-align: center">
      <el-main>
        <el-row :gutter="20">
          <el-col :span="4"></el-col>

          <el-col :span="6">
            <el-card :body-style="{ padding: '0px' }" shadow="hover">
              <div class="avatar">
                <el-avatar :size="280"
                  ><img :src="plist.profileimg"
                /></el-avatar>
              </div>
              <el-divider><h2>Profile Picture</h2></el-divider>
              <div style="padding-top: 17px; padding-bottom: 17px">
                <h3>Patient ID: {{ plist.id }}</h3>
              </div>
            </el-card>
          </el-col>

          <el-col :span="10">
            <el-card :body-style="{ padding: '0px' }" shadow="hover">
              <div class="profileTitle">
                <h1>PROFILE</h1>
              </div>

              <div style="padding-top: 16px" class="profile">
                <p><b> Name: </b> {{ plist.fname }}</p>
                <p><b> Surname: </b> {{ plist.lname }}</p>
                <p><b> Age: </b> {{ plist.age }}</p>
                <p><b> Gender: </b> {{ plist.gender }}</p>
                <p><b> Province: </b> {{ plist.location }}</p>
              </div>
              <div class="status">
                <h2>Status:</h2>
                <h3>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  {{ plist.status }}
                </h3>
              </div>
            </el-card>
          </el-col>

          <el-col :span="4"></el-col>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  props: ['plist']
}
</script>

<style>
.el-card {
  background-color: darkturquoise;
}
.avatar {
  padding-top: 30px;
  padding-bottom: 15px;
}
.image {
  width: auto;
  display: block;
  align-items: left;
}
.row {
  align-content: center;
}
.profileTitle {
  font-size: 24px;
}
.profile {
  text-align: left;
  font-size: 20px;
  padding-left: 60px;
}
.status {
  text-align: left;
  padding-left: 60px;
  font-size: 18px;
  padding-bottom: 15px;
}
</style>
