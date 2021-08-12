<template>

<div class="common-layout">


    <div class="profileTitle">
      <h1>Patient Information</h1>
    </div>
    <el-container style="text-align: center;">
      <el-main>
        <el-row :gutter="20">
          <el-col
            :span="4"
          ></el-col>

          <el-col
            :span="6"
          >
            <el-card :body-style="{ padding: '0px' }" shadow="hover">
              <div class="avatar"><el-avatar :size="280"><img :src="info.profileimg" /></el-avatar></div>
              <el-divider><h2>Profile Picture</h2></el-divider>
              <div style="padding-top: 17px; padding-bottom: 17px;">
                <h3>Patient ID: {{ info.id }}</h3>
              </div>
            </el-card>
          </el-col>
          
          <el-col
            :span="10"
          >
            <el-card :body-style="{ padding: '0px' }" shadow="hover">
              <div class="profileTitle">
                <h1>PROFILE</h1>
              </div>

              <div style="padding-top: 16px" class="profile">
                <p> <b> Name: </b> {{ info.fname }} </p> 
                <p> <b> Surname: </b> {{ info.lname }} </p> 
                <p> <b> Age: </b> {{ info.age }} </p> 
                <p> <b> Gender: </b> {{ info.gender }} </p> 
                <p> <b> Province: </b> {{ info.location }} </p> 
              </div>
              <div class="status">
                  <h2>Status: </h2>
                  <h3> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {{ info.status }} </h3>
              </div>
            </el-card>
          </el-col>

          <el-col
            :span="4"
          ></el-col>

        </el-row>
        
      </el-main>
    </el-container>
</div>

  <CommentFrom @submitted="addComment" />
  <h3>Comments</h3>
  <CommentList v-if="comment.length" :comments="comment" />
</template>

<script>
import CommentFrom from '@/components/commentForm.vue'
import CommentList from '@/components/commentList.vue'

export default {
  props: ['info'],
  components: {
    CommentFrom,
    CommentList
  },
  data() {
    return {
      comment: []
    }
  },
  methods: {
    addComment(doc) {
      this.comment.push(doc)
    }
  }
}
</script>

<style>

  .el-card {
    background-color:darkturquoise;
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