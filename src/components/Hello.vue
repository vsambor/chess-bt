<template>
  <div>
    <h1>{{ $t("fr") }}: {{ msg }}</h1>
    <br>
    <v-btn class="success">Test</v-btn>
  </div>
</template>

<script>
import { CHAHGE_STATE } from '../store'

export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to CHESS Vue.js PWA'
    }
  },
  components: {},
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
