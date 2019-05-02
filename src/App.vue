<template>
  <v-app>
    <v-content>
      <Home></Home>
    </v-content>
  </v-app>
</template>

<script>
    import Home from "./components/Home";
    import { page } from 'vue-analytics'

    export default {
        name: 'App',
        components: {
            Home
        },
        mounted: function() {
            page('/');
        }
    }
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Nunito+Sans:400,700');
</style>