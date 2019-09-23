<template>
    <div>
        <v-divider></v-divider>
        <div class="px-3 py-5" style="background: #D7D6DB">
            <BLCenterWrap>
                <v-layout row justify-start align-start wrap>
                    <v-flex xs12 lg3 py-3>
                        <small>
                            &copy; 2019 BIST League 2.0
                        </small>
                    </v-flex>
                    <v-flex xs12 lg3 py-3>
                        <router-link to="/" class="link-footer">Home</router-link>
                        <br />
                        <router-link to="/competition" class="link-footer">Business-IT Case Competition</router-link>
                        <br />
                        <router-link to="/login" class="link-footer">Login to Dashboard</router-link>
                    </v-flex>
                    <v-flex xs12 lg3 py-3>
                        <div>
                            <div class="mb-2 link-footer">Our social media:</div>
                            <a href="https://www.instagram.com/bistleague" target="_blank" style="text-decoration: none"><v-icon>fab fa-instagram</v-icon></a>
                            &nbsp;
                            <a href="https://line.me/R/ti/p/%40bistleague" target="_blank" style="text-decoration: none"><v-icon>fab fa-line</v-icon></a>
                            &nbsp;
                            <a href="https://www.linkedin.com/company/bist-league" target="_blank" style="text-decoration: none"><v-icon>fab fa-linkedin</v-icon></a>
                            &nbsp;
                            <a href="https://twitter.com/bistleague" target="_blank" style="text-decoration: none"><v-icon>fab fa-twitter</v-icon></a>
                            &nbsp;
                            <a href="https://www.facebook.com/BISTleague/" target="_blank" style="text-decoration: none"><v-icon>fab fa-facebook</v-icon></a>
                        </div>
                    </v-flex>
                    <v-flex xs12 lg3 py-3>
                        <div>
                            <div class="mb-2 link-footer">Organized by:</div>
                            <v-img contain :src="require('../../assets/itb-assists-logo.png')" height="60" position="left"></v-img>
                        </div>
                    </v-flex>
                </v-layout>
            </BLCenterWrap>
        </div>
    </div>
</template>

<script>
    import BLCenterWrap from "./BLCenterWrap";
    export default {
        name: "BLFooter",
        components: {BLCenterWrap},
    }
</script>

<style scoped>
    .link-footer {
        color: #5E6071;
        text-decoration: none;
    }
</style>