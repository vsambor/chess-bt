<template>
  <div class="hello">
    <chessboard @onMove="showInfo" :fen="'8/p1r3k1/1n3pp1/1p3p1q/3Q3p/1P1N1R1P/P5PK/8 w - - 0 1'"/>
  </div>
</template>

<script>
import { chessboard } from 'vue-chessboard'
import 'vue-chessboard/dist/vue-chessboard.css'

export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js PWA'
    }
  },
  components: { chessboard },
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
