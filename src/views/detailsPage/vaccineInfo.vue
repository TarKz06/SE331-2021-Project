<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container class="flex flex-center q-pa-md row q-gutter-lg">
      <q-card class="my-card">
        <q-img :src="plist.vaccineDetails[0].vimg"></q-img>
        <q-card-section>
          <div class="text-overline text-orange-9">
            Already Inject Dose : {{ plist.vaccineDetails[0].vdose }}
          </div>
          <div class="text-h5 q-mt-sm q-mb-xs">
            {{ plist.vaccineDetails[0].vname }}
          </div>
          <div class="text-caption text-grey">
            Technology : {{ plist.vaccineDetails[0].vtype }}
            <br />
            <span>{{ plist.vaccineDetails[0].vdate }}</span>
          </div>
        </q-card-section>
      </q-card>

      <q-card v-if="plist.vaccineDetails[1].vname" class="my-card">
        <q-img :src="plist.vaccineDetails[1].vimg"></q-img>
        <q-card-section>
          <div class="text-overline text-orange-9">
            Already Inject Dose : {{ plist.vaccineDetails[1].vdose }}
          </div>
          <div class="text-h5 q-mt-sm q-mb-xs">
            {{ plist.vaccineDetails[1].vname }}
          </div>
          <div class="text-caption text-grey">
            Technology : {{ plist.vaccineDetails[1].vtype }}
            <br />
            <span>{{ plist.vaccineDetails[1].vdate }}</span>
          </div>
        </q-card-section>
      </q-card>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  props: ['plist'],
  data() {
    return {}
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

.div {
  text-align: left;
  text-size-adjust: small;
  margin: 5%;
}
.container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
</style>
