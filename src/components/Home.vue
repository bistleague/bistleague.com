<template>
  <v-container fill-height flex class="pa-0" style="background: #FFF2DF">
    <v-layout wrap>
      <v-flex md6 pa-4 order-sm2>
        <v-layout align-start justify-space-between column fill-height>
          <v-flex class="py-4">
            <v-img :src="require('../assets/logo.png')" width="60"></v-img>
          </v-flex>
          <v-flex>
            <div class="headline">BIST League 2.0</div>
            <h1 class="display-3 font-weight-bold">Coming Soon</h1>
            <div class="headline grey--text">New Chapter. New Stories. Same Goals.</div>
            <div class="mt-3">
              <a href="https://www.instagram.com/bistleague" target="_blank" style="text-decoration: none"><v-icon>fab fa-instagram</v-icon></a>
              &nbsp;
              <a href="https://line.me/ti/p/@ovw4009g" target="_blank" style="text-decoration: none"><v-icon>fab fa-line</v-icon></a>
              &nbsp;
              <a href="https://www.linkedin.com/company/bist-league" target="_blank" style="text-decoration: none"><v-icon>fab fa-linkedin</v-icon></a>
              &nbsp;
              <a href="https://twitter.com/bistleague" target="_blank" style="text-decoration: none"><v-icon>fab fa-twitter</v-icon></a>
              &nbsp;
              <a href="https://www.facebook.com/BISTleague/" target="_blank" style="text-decoration: none"><v-icon>fab fa-facebook</v-icon></a>
            </div>
          </v-flex>
          <v-flex height="60"></v-flex>
        </v-layout>
      </v-flex>
      <v-flex md6 order-sm1 hidden-sm-and-down>
        <v-img :src="require('../assets/web-cs-paint-blue.svg')" cover height="100vh" position="center right">
          <v-layout fill-height justify-end align-end row class="pa-4">
            <v-flex>
              <div align="right">
                <v-img :src="require('../assets/web-cs-worker.svg')" height="40vh" contain width="40vw"></v-img>
              </div>
            </v-flex>
          </v-layout>
        </v-img>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {

  }
</script>

<style scoped>
</style>
