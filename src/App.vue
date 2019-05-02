<template>
  <v-app>
    <v-content>
      <Home></Home>
    </v-content>
  </v-app>
</template>

<script>
import Home from "./components/Home";

export default {
  name: 'App',
  components: {
      Home
  },
  data () {
    return {
      //
    }
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Nunito+Sans:400,700');
</style>