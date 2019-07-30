<template>
  <transition name="fade">
    <v-app>
      <div style="position: fixed; left: 0; top: 0; width: 100%; z-index: 1000">
        <v-progress-linear :indeterminate="true" class="ma-0" height="3" color="primary darken-1" v-if="loading"></v-progress-linear>
      </div>
      <router-view v-on:show-loading="showLoading" v-on:hide-loading="hideLoading"></router-view>
    </v-app>
  </transition>
</template>

<script>
    // import { page } from 'vue-analytics'

    export default {
      name: 'App',
      data () {
        return {
          loading: true
        }
      },
      mounted () {
        this.loading = false;
      },
      created () {
        this.loading = true;
        let self = this;
        // Hook to show progress bar
        this.$router.beforeEach((to, from, next) => {
          self.showLoading();
          next();
        });

        // Hook to hide progress bar
        this.$router.afterEach(() => {
          //  finish the progress bar
          self.hideLoading();
        });
      },
      methods: {
        showLoading() {
          this.loading = true;
        },
        hideLoading() {
          this.loading = false;
        }
      }
    }
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Nunito+Sans:400,700');
</style>