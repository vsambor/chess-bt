<template>
  <v-app id="app" dark>
    <left-sider :drawer.sync="drawer"/>
    <navbar :drawer.sync="drawer" />
    <v-content>
        <router-view></router-view>
    </v-content>
    <app-footer/>
  </v-app>
</template>

<script>
import AppFooter from './components/core/Footer'
import LeftSider from './components/core/LeftSider'
import Navbar from './components/core/Navbar'

export default {
  name: 'app',
  data: () => ({
    drawer: true
  }),
  components: {
    LeftSider,
    Navbar,
    AppFooter
  }
}
</script>
