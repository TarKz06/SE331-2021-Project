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
          <q-card class="my-card shadow-3 bg-secondary">
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
          <q-card class="card2 my-card shadow-3 bg-secondary" >
            <div
              style="height: 300px; padding-top: 15px"
            >
              <h3><b>PROFILE</b></h3>
              <p class="profile"> 
                <b>Name:</b> {{ plist.fname }} <br>
                <b>Surname:</b> {{ plist.lname }} <br>
                <b>Age:</b> {{ plist.age }} <br>
                <b>Gender:</b> {{ plist.gender }} <br>
                <b>Hometown:</b> {{ plist.location }} <br>
                <b>Number of dose(s) injected:</b> {{ plist.status }} 
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
  font-size: 14px;
  padding-bottom: 15px;
}
.my-card {
  width: fit-content;
  height: 400px;
}
.my-card:hover {
  cursor: pointer;
  opacity: 0.5px;
  transform: scale(1.05);
  box-shadow: 100px;
}
.card2 {
  width: 600px;
}

@media only screen and (max-width: 500px) {
  .card2 {
    width: 400px;
  }
}
</style>
