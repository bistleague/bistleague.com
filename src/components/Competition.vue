<template class="white">
    <div>
        <BLToolbar />
        <v-img height="350px" :src="require('../assets/competition.jpg')">
            <v-layout fill-height justify-end align-end row>
                <v-flex>
                    <BLCenterWrap>
                        <div class="display-1 font-weight-bold white--text mt-3 mb-4">Business-IT Case Competition</div>
                    </BLCenterWrap>
                </v-flex>
            </v-layout>
        </v-img>
        <v-card flat color="primary darken-1" v-if="!loading" tile>
            <BLCenterWrap>
                <v-tabs v-model="tab" color="primary darken-1" dark>
                    <v-tabs-slider color="yellow"></v-tabs-slider>

                    <v-tab @click="$router.push('/competition')" key="overview" class="font-weight-bold text-none">
                        Overview
                    </v-tab>
                    <v-tab @click="$router.push('/competition/faq')" key="faq" class="font-weight-bold text-none">
                        FAQ
                    </v-tab>
                </v-tabs>
            </BLCenterWrap>
        </v-card>
        <v-tabs-items v-model="tab" touchless>
            <v-tab-item key="overview">
                <CompetitionOverview />
            </v-tab-item>
            <v-tab-item key="faq">
                <CompetitionFAQ_EN />
            </v-tab-item>
        </v-tabs-items>
        <BLFooter/>
    </div>
</template>

<script>
    import BLToolbar from "./partials/BLToolbar";
    import BLCenterWrap from "./partials/BLCenterWrap";
    import BLFooter from "./partials/BLFooter";
    import CompetitionOverview from "./subpage/CompetitionOverview";
    import CompetitionFAQ_EN from "./subpage/CompetitionFAQ_EN";
    export default {
        name: "Competition",
        components: {CompetitionFAQ_EN, CompetitionOverview, BLFooter, BLCenterWrap, BLToolbar},
        data() {
            return {
                tab: (this.$router.currentRoute.path === '/competition/faq') ? 1 : 0
            }
        },
        watch:{
            $route (to){
                this.tab = (to.path === '/competition/faq') ? 1 : 0
            }
        },
    }
</script>

<style scoped>
</style>
