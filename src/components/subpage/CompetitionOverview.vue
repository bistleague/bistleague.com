<template>
    <div>
        <BLCenterWrap>
            <v-layout wrap mt-2 py-5 justify-center align-center>
                <v-flex xs12 sm12 md6 lg6 order-xs2 order-sm2 order-md1 my-4>
                    <div class="headline font-weight-bold" style="color: #0C4E54">Business-IT Case</div>
                    <p class="mt-3" style="font-size: 18px; color: #0C4E54">
                        Business-IT Case  is a competition where participants can solve business problems and formulate the best IT-based ideas/solutions to solve existing problems.
                    </p>
                    <div class="title font-weight-bold mt-5" style="color: #0C4E54">
                        Embrace the Rapidly Changing Technology to Empower Underprivileged Population
                    </div>
                    <p class="mt-3" style="font-size: 18px; color: #0C4E54">
                        By embracing the rapidly changing technology, let's show your solution and play a role in empowering underprivileged populations in Indonesia.
                    </p>
                </v-flex>
                <v-flex xs12 sm12 md6 lg6 order-xs2 order-sm2 order-md1>
                    <div align="center">
                        <v-img :src="require('../../assets/compside1.png')" width="70%"></v-img>
                    </div>
                </v-flex>
            </v-layout>
        </BLCenterWrap>
        <v-divider></v-divider>
        <BLCenterWrap class="white pa-3 py-5" align="center">
            <v-layout row>
                <v-flex offset-md2 md8>
                    <div class="display-1 font-weight-bold" style="color: #0C4E54">Business-IT Case</div>
                    <p class="title mt-3">Take part in one of the biggest and most prestigious Business-IT case competition in Indonesia.</p>
                    <div class="my-3"></div>
                    <a :href="rulebookUrl" target="_blank" style="text-decoration: none">
                        <v-btn large outline color="grey darken-1" class="font-weight-bold text-none">Download Rulebook</v-btn>
                    </a>
                    <a :href="competitionUrl" style="text-decoration: none">
                        <v-btn large outline color="primary darken-3" class="font-weight-bold text-none">Register Now</v-btn>
                    </a>
                </v-flex>
            </v-layout>
        </BLCenterWrap>
        <v-divider></v-divider>
        <BLCenterWrap class="white py-5">
            <v-layout wrap row>
                <v-flex md4 class="mt-3">
                    <div class="headline font-weight-bold" style="color: #0C4E54">Registration Fee</div>
                    <p class="mt-3">The registration fee is as follows:</p>
                    <ol type="a">
                        <li>
                            <b style="color: #0C4E54">Early Bird (July 28<sup>th</sup> - August 16<sup>th</sup> 2019)</b>
                            <div><s>Rp300.000,-</s> &rarr; <b>Rp250.000,- per team</b> (free seminar tickets included)</div>
                        </li>
                        <li>
                            <b style="color: #0C4E54">Late Bird (August 17<sup>th</sup> - August 31<sup>st</sup> 2019)</b>
                            <div><s>Rp300.000,-</s> &rarr; <b>Rp275.000,- per team</b> (free seminar tickets included)</div>
                        </li>
                        <li>
                            <b style="color: #0C4E54">Normal Price (September 1<sup>st</sup> - September 4<sup>th</sup> 2019)</b>
                            <div><b>Rp300.000,- per team</b> (free seminar tickets included)</div>
                        </li>
                    </ol>

                    <v-card flat color="#f4f4f4" class="mt-3 px-1">
                        <v-card-text>
                            <p>Please transfer the fund to:</p>
                            <ul>
                                <li>Bank: BCA</li>
                                <li>Account No.: 777-197-8626</li>
                                <li>Holder Name: Randy Christian Saputra</li>
                            </ul>
                            <p class="mt-3">Upon successful payment, please keep your proof of payment and upload it on the registration dashboard.</p>
                        </v-card-text>
                    </v-card>
                </v-flex>
                <v-flex md4 class="mt-3 px-1">
                    <div class="headline font-weight-bold" style="color: #0C4E54">Prize</div>
                    <ul class="mt-3" style="font-size: 16px">
                        <li>Champion: <b>Rp10.000.000,-</b></li>
                        <li>First Runner Up: <b>7.500.000,-</b></li>
                        <li>Second Runner Up: <b>5.000.000,-</b></li>
                        <li>Best Speaker: <b>1.500.000,-</b></li>
                    </ul>
                </v-flex>
                <v-flex md4 class="mt-3 px-1">
                    <div class="headline font-weight-bold" style="color: #0C4E54">Requirements</div>
                    <ul class="mt-3" style="font-size: 16px">
                        <li>Each team consists of 2-3 members. Participants must be enrolled full time in an undergraduate bachelor's degree or diploma program.</li>
                        <li>Each participating team must be registered in the Bistleague.com website</li>
                        <li>Each team member may only be registered in one team.</li>
                        <li>Team members may come from different majors, but the same university.</li>
                    </ul>
                </v-flex>
            </v-layout>
        </BLCenterWrap>
        <v-divider></v-divider>
        <BLCenterWrap class="white pa-3 py-5">
            <div align="center">
                <v-layout row>
                    <v-flex offset-md2 md8>
                        <div class="display-1 font-weight-bold" style="color: #EB823E">Cashback!</div>
                        <p class="title mt-3">Sign up early and you'll get a cashback!</p>
                    </v-flex>
                </v-layout>
            </div>
            <v-card flat color="#f4f4f4" class="py-3">
                <v-card-text>
                    <v-layout wrap row>
                        <v-flex md6 class="pa-2">
                            <ul>
                                <li>The first 20 teams signing up will get a cashback of <b>Rp50.000,-</b></li>
                                <li>The next 25 teams signing up will get a cashback of <b>Rp35.000,-</b></li>
                                <li>The next 30 teams signing up will get a cashback of <b>Rp20.000,-</b></li>
                            </ul>
                            <div class="mt-3">
                                <b>All team members must post BIST League twibbon in their Instagram feeds and tag 3 of your friends who are not in the same team as you.</b>
                            </div>
                            <p class="mt-3">
                                Twibbon and Caption can be found here: <a href="http://bit.ly/BISTLeague2019_Twibbon" target="_blank">http://bit.ly/BISTLeague2019_Twibbon</a>
                            </p>
                        </v-flex>
                        <v-flex md6 class="pa-2">
                            <p>Teams who have made payment can get their cashback by sending:</p>
                            <ol type="a">
                                <li>Team name</li>
                                <li>Recipient's bank name, account number, and holder name</li>
                                <li>Instagram post screenshot</li>
                                <li>Proof of payment</li>
                            </ol>
                            <p class="mt-3">to the BIST League LINE Official Account (<a href="https://line.me/R/ti/p/%40bistleague">@bistleague</a>)</p>
                            <p>After it has been processed, the committee will send you a notification regarding the cashback within a few days through the BIST League LINE OA.</p>
                        </v-flex>
                    </v-layout>
                </v-card-text>
            </v-card>
        </BLCenterWrap>
    </div>
</template>

<script>
    import BLCenterWrap from "../partials/BLCenterWrap";
    export default {
        name: "CompetitionOverview",
        components: {BLCenterWrap},
        data() {
            return {
                competitionUrl: `${process.env.VUE_APP_DASHBOARD_BASE_URL}/competition`,
                rulebookUrl: process.env.VUE_APP_COMPETITION_RULEBOOK_URL
            }
        }
    }
</script>

<style scoped>

</style>