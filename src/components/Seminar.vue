<template class="white">
    <div>
        <BLToolbar />
        <v-img height="80vh" :src="require('../assets/Seminar1.png')">
            <v-layout fill-height justify-end align-end row>
                <v-flex>
                    <BLCenterWrap>
                        <div class="display-1 font-weight-bold white--text mt-3 mb-4 seminar-title">
                            <span>
                                BIST League<br>
                                2019 Seminar
                            </span>
                        </div>
                    </BLCenterWrap>
                </v-flex>
            </v-layout>
        </v-img>
        
        <BLCenterWrap>
            <v-layout wrap mt-2 justify-center align-center py-1>
                <v-flex xs12 sm12 md6 lg6 order-xs3 order-md1 py-4>
                    <span class="headline font-weight-bold">Seminar</span>
                    <p class="paragraph-1 mt-3">
                        Communities, especially small medium enterprises, understand
                        that the various types of technology existing today can help
                        develop any business in a better direction.
                    </p>
                    <p class="paragraph-1">
                        We hope that this seminar can provide knowledge about
                        how Indonesian government continues to encourage
                        SMEs to expand their business by utilizing the digital
                        world. Come and join the BIST League Seminar
                    </p>
                </v-flex>
                <v-flex sm12 lg1 order-xs2 order-md2> </v-flex>
                <v-flex xs12 sm12 md5 lg5 order-xs1 order-md3 py-4>
                    <div class='seminar-asset'>
                        <v-img height="100%" :src="require('../assets/Seminar2.png')"></v-img>
                    </div>
                </v-flex>
            </v-layout>

            <v-layout wrap mt-2 py-1 justify-center align-center>
                <v-flex xs12 sm12 md6 lg6 py-4>
                    <div class='seminar-asset'>
                        <v-img height="100%" :src="require('../assets/Seminar3.png')"></v-img>
                    </div>
                </v-flex>
                <v-flex sm12 lg1> </v-flex>
                <v-flex xs12 sm12 md5 lg5 py-4>
                    <v-layout wrap justify-center align-center>
                        <v-flex xs10 md6>
                            <ol class='seminar-list'>
                                <li>Indonesian Government's Roadmap in Empowering Low Class Economic Society</li>
                                <li>How to Empower SME to Creatively Innovate on Current Thriving Market</li>
                                <li>Unlock SME's Future Growth</li>
                            </ol>
                        </v-flex>
                    </v-layout>
                </v-flex>
            </v-layout>
        </BLCenterWrap>

        <v-divider></v-divider>

        <BLCenterWrap>
            <v-layout wrap mt-2 py-1 justify-center align-center>
                <v-flex sm12 lg6 py-4 style='text-align:center'>
                    <span class="headline font-weight-bold">Seminar</span>
                    <p class="paragraph-1 mt-3">
                        BIST League 2019 seminar will provide you with instights,
                        knowledge, as well as experiences to help you become a part
                        of the ongoing technological advance and development.
                    </p>
                    <router-link to="#" style="text-decoration: none">
                        <v-btn large outline primary class="mt-3 text-none font-weight-bold" color="primary darken-3">Register for the Seminar</v-btn>
                    </router-link>
                </v-flex>
            </v-layout>
        </BLCenterWrap>
        <BLFooter/>
    </div>
</template>

<script>
    import BLToolbar from "./partials/BLToolbar";
    import BLCenterWrap from "./partials/BLCenterWrap";
    import BLFooter from "./partials/BLFooter";

    export default {
        name: "Seminar",
        components: {BLFooter, BLCenterWrap, BLToolbar},
    }
</script>

<style lang="stylus" scoped>
    // Placeholder
    .seminar-asset{
        min-height: 200px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }


    // Property Assignment
    .seminar-title{
        display: flex;
        flex-direction: row;
        justify-content: flex-end;

        span{
            text-align: right;
            line-height: 1.4;
            font-weight: 800;
        }
    }

    .headline, .paragraph-1{
        color: #0C4E54;
    }

    .paragraph-1{
         font-size: 16px; 
         line-height: 1.65;
    }

    ol.seminar-list{
        counter-reset: section;
        display: block;

        li{
            margin-bottom: 1.5rem;
            font-size: 14px;
            color: #24231F;
            list-style-type: none;
            z-index: 1;
            position: relative;

        }

        li::before{
            counter-increment: section;
            color: #EBECEE;
            z-index: -1;
            content: counter(section);
            position: absolute;
            left: -28px;
            top: -30px;
            font-size: 400%;
            font-weight: 900;
        }
    }
    
</style>