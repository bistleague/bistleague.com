<template class="white">
    <div>
        <BLToolbar />
        <v-img height="50vh" :src="require('../assets/Seminar1.png')">
            <v-layout fill-height justify-end align-end row>
                <v-flex>
                    <BLCenterWrap>
                        <div class="display-1 font-weight-bold white--text mt-3 mb-4 seminar-title">
                            <span>
                                BIST League 2.0 Seminar
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
                        Communities, especially small and medium enterprises (SME), understand
                        that the various types of technology existing today can help
                        develop any business in a better direction.
                    </p>
                    <p class="paragraph-1">
                        We hope that this seminar can provide knowledge about
                        how Indonesian government continues to encourage
                        SMEs to expand their business by utilizing the digital
                        world. Come and join the BIST League 2.0 Seminar!
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
                                <li>The Indonesian Startup Initiatives in Empowering Underprivileged Societies</li>
                                <li>How to Empower SME to Creatively Innovate on Current Thriving Market</li>
                                <li>Unlock SME's Future Growth</li>
                            </ol>
                        </v-flex>
                    </v-layout>
                </v-flex>
            </v-layout>
        </BLCenterWrap>

        <v-divider></v-divider>

        <BLCenterWrap style="background: #0C4E54; color: white; text-align: center" class="py-5 px-1">
            <div class="display-1 font-weight-bold">Speakers</div>
            <div class="headline mt-3 font-weight-bold">Seminar</div>
            <v-layout wrap class="mt-3">
                <v-flex sm12 md6 class="pa-2">
                    <v-avatar
                            :size="150"
                            color="grey lighten-4"
                    >
                        <v-img :src="require('../assets/speakers/1.png')" alt="avatar"></v-img>
                    </v-avatar>
                    <div class="title mt-4">Nur Islami Javad</div>
                    <div class="subtitle mt-1">Chief DEF Sharing Vision, CoCEO Business Initiative Movement (BIM)</div>
                </v-flex>
                <v-flex sm12 md6 class="pa-2">
                    <v-avatar
                            :size="150"
                            color="grey lighten-4"
                    >
                        <v-img :src="require('../assets/speakers/2.png')" alt="avatar"></v-img>
                    </v-avatar>
                    <div class="title mt-4">Teguh Ariya</div>
                    <div class="subtitle mt-1">Senior Product Manager at PT Moka Teknologi Indonesia</div>
                </v-flex>
            </v-layout>
        </BLCenterWrap>
        <BLCenterWrap style="background: #093A3F; color: white; text-align: center" class="py-5 px-1">
        <div class="headline font-weight-bold">Talkshow</div>
            <v-layout wrap class="mt-3">
                <v-flex sm12 md4 class="pa-2">
                    <v-avatar
                            :size="150"
                            color="grey lighten-4"
                    >
                        <v-img :src="require('../assets/speakers/3.png')" alt="avatar"></v-img>
                    </v-avatar>
                    <div class="title mt-4">Jonathan Kurniawan</div>
                    <div class="subtitle mt-1">Senior Data Manager at Bukalapak</div>
                    <div class="font-weight-bold grey--text text--lighten-1">Big Data</div>
                </v-flex>
                <v-flex sm12 md4 class="pa-2">
                    <v-avatar
                            :size="150"
                            color="grey lighten-4"
                    >
                        <v-img :src="require('../assets/speakers/4.png')" alt="avatar"></v-img>
                    </v-avatar>
                    <div class="title mt-4">Eka Theresia Kartika Suri</div>
                    <div class="subtitle mt-1">IoT New Business and Development Product and Partnership at Telkomsel IoT</div>
                    <div class="font-weight-bold grey--text text--lighten-1">IoT</div>
                </v-flex>
                <v-flex sm12 md4 class="pa-2">
                    <v-avatar
                            :size="150"
                            color="grey lighten-4"
                    >
                        <v-img :src="require('../assets/speakers/5.png')" alt="avatar"></v-img>
                    </v-avatar>
                    <div class="title mt-4">Jeganathan Sethu</div>
                    <div class="subtitle mt-1">Co-founder at goKampus</div>
                    <div class="font-weight-bold grey--text text--lighten-1">Cloud Computing</div>
                </v-flex>
            </v-layout>
            <v-layout wrap class="mt-4">
                <v-flex sm12 offset-md2 md4 class="pa-2">
                    <v-avatar
                            :size="150"
                            color="grey lighten-4"
                    >
                        <v-img :src="require('../assets/speakers/6.png')" alt="avatar"></v-img>
                    </v-avatar>
                    <div class="title mt-4">Richard Dharmadi</div>
                    <div class="subtitle mt-1">Group Product Manager at Nodeflux</div>
                    <div class="font-weight-bold grey--text text--lighten-1">AI</div>
                </v-flex>
                <v-flex sm12 md4 class="pa-2">
                    <v-avatar
                            :size="150"
                            color="grey lighten-4"
                    >
                        <v-img :src="require('../assets/speakers/mod.png')" alt="avatar"></v-img>
                    </v-avatar>
                    <div class="title mt-4">Joshua Atmadja</div>
                    <div class="subtitle mt-1">Product Designer at Cicil.co.id</div>
                    <div class="font-weight-bold grey--text text--lighten-1">Moderator</div>
                </v-flex>
            </v-layout>
        </BLCenterWrap>

        <v-divider></v-divider>

        <BLCenterWrap>
            <v-layout wrap mt-2 py-1 justify-center align-center>
                <v-flex sm12 lg6 py-4 style='text-align:center'>
                    <span class="display-1 font-weight-bold">Register now!</span>
                    <p class="paragraph-1 mt-3">
                        BIST League 2.0 seminar will provide you with insights,
                        knowledge, as well as experiences to help you become a part
                        of the ongoing technological advancement and development.
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
        justify-content: flex-start;

        span{
            text-align: left;
            line-height: 1.4;
            font-weight: 800;
        }
    }

    .headline, .paragraph-1{
        /*color: #0C4E54;*/
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