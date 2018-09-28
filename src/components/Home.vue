<template>
  <div>
    <h1>{{ $t("fr") }}: {{ msg }}</h1>
    <br>
    <v-btn class="success">Test</v-btn>

    <v-layout align-center justify-center row fill-height>
        <chessboard/>
    </v-layout>
  </div>
</template>

<script>
import { CHAHGE_STATE } from '../store'
import {chessboard} from 'vue-chessboard'
import 'vue-chessboard/dist/vue-chessboard.css'

export default {
  data: () => ({
    msg: 'Welcome to CHESS Vue.js PWA'
  }),
  components: {chessboard},
  mounted () {
    console.log('Mounted: ' + this.$store.getters.testState)
    this.$store.commit(CHAHGE_STATE, 3)
    console.log('Mounted: ' + this.$store.getters.testState)
  },
  methods: {
    showInfo (info) {
      console.log(info)
    }
  }
}
</script>

<style >
/* /!\ HACK to be fixed! /!\ */
.black {
  background-color: rgba(0,0,0,0)!important
}
.white {
  background-color: rgba(0,0,0,0)!important
}

.blue {
  background-color: rgba(0,0,0,0)!important
}
</style>
