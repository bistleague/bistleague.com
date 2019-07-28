<template>
    <div>
        <v-img :src="require('../assets/bgbl2.jpg')" cover height="100vh" position="center right">
            <BLToolbar />
            <BLCenterWrap align="right" style="margin-top: 32px;">
                <v-layout>
                    <v-flex sm6></v-flex>
                    <v-flex sm6>
                        <div class="display-3 font-weight-bold" style="color: #0C4E54">BIST League 2.0</div>
                        <p class="subheading" style="color: #067878;">Embrace the Rapidly Changing Technology to Empower Underprivileged Population</p>
                        <router-link to="/competition" style="text-decoration: none">
                            <v-btn large outline primary class="mt-3 text-none font-weight-bold" color="primary darken-3">Register for the Competition</v-btn>
                        </router-link>
                    </v-flex>
                </v-layout>
            </BLCenterWrap>
        </v-img>
        <BLFooter/>
    </div>
</template>

<script>
    import BLToolbar from "./partials/BLToolbar";
    import BLCenterWrap from "./partials/BLCenterWrap";
    import BLFooter from "./partials/BLFooter";
    export default {
        name: "Home",
        components: {BLFooter, BLCenterWrap, BLToolbar}
    }
</script>

<style scoped>
</style>
