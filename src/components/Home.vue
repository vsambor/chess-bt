<template>
  <div>
    <h1>{{ $t("fr") }}</h1>
    <br>

    <h5>{{currFenName}}</h5>
    <v-layout align-center justify-center row fill-height>
        <chessboard @onMove="showInfo" :fen="currFen"/>
    </v-layout>

    <v-btn class="success" @click="onNextPuzzle">{{ $t('next_puzzle') }}</v-btn>
    <v-btn class="dark" @click="seeSolution">{{ $t('see_solution') }}</v-btn>
  </div>
</template>

<script>
import { CHAHGE_STATE } from '../store'
import {chessboard} from 'vue-chessboard'
import 'vue-chessboard/dist/vue-chessboard.css'
import fenService from '../services/fen'

export default {
  data: () => ({
    fens: [],
    curFenIndex: 0
  }),
  components: {chessboard},
  computed: {
    currFen () {
      if (this.fens.length > 0) {
        return this.fens[this.curFenIndex].fen
      }
      return ''
    },
    currFenName () {
      if (this.fens.length > 0) {
        return this.fens[this.curFenIndex].name
      }
      return ''
    },
    currFenSolution () {
      if (this.fens.length > 0) {
        return this.fens[this.curFenIndex].solution
      }
      return ''
    }
  },
  mounted () {
    this.fens = fenService.getMateIn2()
    console.log('Mounted: ' + this.$store.getters.testState)
    this.$store.commit(CHAHGE_STATE, 3)
    console.log('Mounted: ' + this.$store.getters.testState)
  },
  methods: {
    showInfo (info) {
      console.log(info)
    },
    onNextPuzzle () {
      this.curFenIndex++
      console.log(this.currFen)
    },
    seeSolution () {
      console.log(this.currFenSolution)
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
