<template>
  <div class="common-layout">
    <div class="profileTitle">
      <h3><b>Patient Information</b></h3>
    </div>

    <center>
      <div class="row q-gutter-sm">


<div class="col-xs-12 col-md-3 col-lg-2">
</div>

        <div class="col-xs-12 col-md-6 col-lg-3">
          <q-card class="card1 my-card shadow-5 bg-secondary">
            <div
              class="column items-center"
              style="height: 300px; padding-top: 15px"
            >
              <q-item>
                <q-item-section avatar>
                  <q-avatar size="250px">
                    <img :src="plist.profileimg" />
                  </q-avatar>
                </q-item-section>
              </q-item>
            </div>

            <q-separator color="dark" inset />

            <q-card-section>
              <p class="patientId"><b> Patient ID: {{ plist.id }} </b></p>  
            </q-card-section>
          </q-card>
        </div>

      <div class="col-xs-12 col-md-12 col-lg-5">
          <q-card class="card2 my-card shadow-5 bg-secondary" >
            <div
              style="height: 300px; padding-top: 15px"
            >
              <p class="bigProfile" style="color: cornsilk;"><b>PROFILE</b></p>
              <q-separator color="dark" inset />
              <p class="profile"> 
                <b>Name:</b> {{ plist.fname }} <br>
                <b>Surname:</b> {{ plist.lname }} <br>
                <b>Age:</b> {{ plist.age }} <br>
                <b>Gender:</b> {{ plist.gender }} <br>
                <b>Hometown:</b> {{ plist.location }} <br>
              </p>
                <p class="status">
                  <b>Dose(s) injected:</b> <br>
                  <center> {{ plist.status }} </center>
                </p>
              
              
            </div>


          </q-card>
        </div>

<div class="col-xs-12 col-md-0 col-lg-2">
</div>

      </div>

    </center>
  </div>
</template>

<script>
export default {
  props: ['plist']
}
</script>

<style>
.avatar {
  align-items: center;
  text-align: center;
  display: flex;
}
.q-card {
  padding: 0px;
}
.q-item__section--side {
  padding-right: 0px;
}
.row {
  align-content: center;
}
.patientId {
  font-size: 24px;
  color: cornsilk;
}
.profileTitle {
  font-size: 24px;
}
.bigProfile {
  font-size: 40px;
}
.profile {
  text-align: left;
  font-size: 20px;
  padding-top: 30px;
  padding-left: 60px;
  color: cornsilk;
}
.status {
  text-align: left;
  font-size: 30px;
  padding-left: 60px;
  color: cornsilk;
}
.card1 {
  width: fit-content;
  height: 400px;
}
.card1:hover {
  cursor: pointer;
  opacity: 0.5px;
  transform: scale(1.30);
  box-shadow: 300px;
}
.card2 {
  width: 600px;
  height: 400px;
}
.card2:hover {
  cursor: pointer;
  opacity: 0.5px;
  transform: scale(1.30);
  box-shadow: 300px;
}

@media only screen and (max-width: 500px) {
  .card2 {
    width: 400px;
  }
}
</style>
