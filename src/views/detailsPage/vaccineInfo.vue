<template>
  <h1>Vaccine Information</h1>
  <div>
    <el-row>
      <el-tag type="danger">Total dose: {{plist.status}}</el-tag>
      <el-col :span="6"></el-col>
      <el-col :span="12">
        <el-tag type="success">First dose</el-tag>
        <el-card :body-style="{ padding: '10px'}">
          <div class="bottom">
            <img :src="plist.vaccineDetails[0].vimg" class="image">
          </div>
          <div class="div">
            <p><b>Name: </b>{{ plist.vaccineDetails[0].vname }}</p>
            <p><b>Type: </b>{{ plist.vaccineDetails[0].vtype }}</p>
            <p><b>Vaccinated Date: </b>{{ plist.vaccineDetails[0].vdate }}</p>
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
      <el-col v-if="plist.vaccineDetails[1].vname" :span="12">
        <el-tag type="success">Second dose</el-tag>
        <el-card :body-style="{ padding: '10px'}">
          <div class="bottom">
            <img :src="plist.vaccineDetails[1].vimg" class="image">
          </div>
          <div class="div">
            <p><b>Name: </b>{{ plist.vaccineDetails[1].vname }}</p>
            <p><b>Type: </b>{{ plist.vaccineDetails[1].vtype }}</p>
            <p><b>Vaccinated Date: </b>{{ plist.vaccineDetails[1].vdate }}</p>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6"></el-col>
    </el-row>
  </div>
</template>


<script>
  export default {
  props: ['plist'],
  data(){
    return{

    }
  }
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



