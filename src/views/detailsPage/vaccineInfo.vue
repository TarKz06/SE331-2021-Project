<template>
  <div>
    <el-row>
      <el-col :span="6"></el-col>
      <el-col :span="12">
        <el-card :body-style="{ padding: '10px'}">
          <div class="bottom">
            <img :src="info.vaccine1[0].vimg" class="image">
          </div>
          <div class="div">
            <p><b>Name: </b>{{ info.vaccine1[0].vname }}</p>
            <p><b>Type: </b>{{ info.vaccine1[0].vtype }}</p>
            <p><b>Vaccinated Date: </b>{{ info.vaccine1[0].vdate }}</p>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6"></el-col>
    </el-row>
  </div>
  <br>
  <div>
    <el-row >
      <el-col :span="6"></el-col>
      <el-col v-if="info.vaccine2[0].vname" :span="12">
        <el-card :body-style="{ padding: '10px'}">
          <div class="bottom">
            <img :src="info.vaccine2[0].vimg" class="image">
          </div>
          <div class="div">
            <p><b>Name: </b>{{ info.vaccine2[0].vname }}</p>
            <p><b>Type: </b>{{ info.vaccine2[0].vtype }}</p>
            <p><b>Vaccinated Date: </b>{{ info.vaccine2[0].vdate }}</p>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6"></el-col>
    </el-row>
  </div>
</template>


<script>
  export default {
  props: ['info']
}
</script>


<style>
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .image {
    width: 100%;
    display: block;
  }

  .div{
     text-align: left;
     text-size-adjust: small;
     margin: 5%;
  }

</style>



