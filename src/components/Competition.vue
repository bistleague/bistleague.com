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
                <BLCenterWrap>
                    <v-layout wrap mt-2 py-5 justify-center align-center>
                        <v-flex xs12 sm12 md6 lg6 order-xs2 order-sm2 order-md1 my-4>
                            <div class="headline font-weight-bold" style="color: #0C4E54">Business-IT Case</div>
                            <p class="mt-3" style="font-size: 18px; color: #0C4E54">
                                Business-IT Case  is a competition where participants can solve business problems and pour the best IT-based ideas/solutions to solve existing problems.
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
                                <v-img :src="require('../assets/compside1.png')" width="70%"></v-img>
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
                    <v-layout row>
                        <v-flex xs12 sm12 md4>
                            <div class="headline font-weight-bold" style="color: #0C4E54">Registration Fee</div>
                            <p class="mt-3">The registration fee is <b>Rp200.000,-</b>. Please transfer the fund to:</p>
                            <ul>
                                <li>Bank: BCA</li>
                                <li>Account No.: 777-197-8626</li>
                                <li>Holder Name: Randy Christian Saputra</li>
                            </ul>
                            <p class="mt-3">Upon successful payment, please keep your proof of payment and upload it on the registration dashboard.</p>
                        </v-flex>
                        <v-flex xs12 sm12 md4>
                            <div class="headline font-weight-bold" style="color: #0C4E54">Prize</div>
                            <ul class="mt-3" style="font-size: 16px">
                                <li>Champion: <b>Rp10.000.000,-</b></li>
                                <li>First Runner Up: <b>7.500.000,-</b></li>
                                <li>Second Runner Up: <b>5.000.000,-</b></li>
                                <li>Best Speaker: <b>1.500.000,-</b></li>
                            </ul>
                        </v-flex>
                        <v-flex xs12 sm12 md4>
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
            </v-tab-item>
            <v-tab-item key="faq">
                <BLCenterWrap class="py-4">
                    <div class="headline mb-3">Frequently Asked Questions (FAQs)</div>
                    <b>Saya sudah membuka website resmi (www.bistleague.com), tapi masih belum bisa sign in. Apa yang harus saya lakukan?</b>
                    <p>
                        Silakan mengklik hyperlink sign up terlebih dahulu. Kemudian isi
                        username dan email serta password sesuai dengan format yang
                        disediakan. Tunggu email verifikasi (3-5 menit) dan klik link
                        verifikasi. Atau anda dapat langsung sign in, meskipun diharuskan
                        untuk verifikasi email untuk kelayakan status registrasi. Kemudian silakan memilih menu Competition.
                    </p>
                    <b class="mt-3">
                        Cara buat timnya gimana ya?
                    </b>
                    <p>
                        Silakan mendaftar terlebih dahulu di www.bistleague.com lalu
                        pada dashboard Competition, pilih Create Team atau Join Team.
                    </p>
                    <b class="mt-3">
                        Mekanisme Create Team dan Join Team bagaimana?
                    </b>
                    <p>
                        Bila kamu adalah ketua tim, pilihlah Create Team.
                        Kamu harus mengisi keterangan tim kamu dan menyebarkan invite code kepada anggota tim lainnya untuk bergabung.
                        Sedangkan bila kamu adalah anggota tim, pakai invite code yang didapatkan dari ketua tim untuk bergabung dengan tim.
                    </p>
                    <b class="mt-3">
                        Apakah jumlah peserta pada tim boleh berdua?
                    </b>
                    <p>
                        Sesuai dengan guidebook, tim boleh terbentuk dari minimal 2
                        orang dan maksimal 3 orang.
                    </p>
                    <b class="mt-3">
                        Apakah peserta pada tim boleh dari jurusan yang berbeda?                        </b>
                    <p>
                        Sesuai dengan guidebook, peserta diperbolehkan dari jurusan
                        yang berbeda namun harus dari perguruan tinggi yang sama.
                    </p>
                    <b class="mt-3">
                        Bagaimana jika saya telah terlanjur Create Team tetapi ternyata
                        teman saya juga Create Team atau bagaimana jika saya terlanjur mengklik Create Team dan ingin kembali ke halaman sebelumnya?
                    </b>
                    <p>
                        Silakan kamu membuka halaman Competition dan klik nama kamu.
                        Kemudian di sebelah email kamu terdapat option untuk leave team. Leave team akan membawa kamu ke halaman Create/Join Team.
                    </p>
                    <b class="mt-3">
                        Saat mendaftar, status masih pending padahal sudah lewat
                        deadline, apakah masih bisa mendaftar?
                    </b>
                    <p>
                        Pendaftaran akan diproses selama pendaftaran dilakukan sebelum
                        ditutupnya periode registrasi. Pendaftaran yang diproses adalah
                        pendaftaran tim yang sudah memenuhi syarat dan ketentuan yang
                        ditentukan di guidebook
                    </p>
                    <b class="mt-3">
                        Apakah student ID harus berwarna atau boleh grayscale?
                    </b>
                    <p>
                        Dibebaskan selama wajahnya terlihat jelas. Student ID diupload
                        dalam format .jpg atau .png
                    </p>
                    <b class="mt-3">
                        Proof of enrollment itu apa dan syaratnya bagaimana ya?
                    </b>
                    <p>
                        Proof of enrollment/letter of eligibility adalah suatu tanda bukti
                        bahwa peserta masih merupakan mahasiswa di suatu perguruan tinggi. Bukti tersebut dapat berupa hasil scan Kartu Tanda Mahasiswa (KSM), atau screenshot rencana studi yang berisi nama, tahun masuk, dan semester yang sedang ditempuh, ataupun juga surat keterangan resmi dari perguruan tinggi yang membuktikan bahwa kamu masih mahasiswa minimal sampai November 2019. Proof of enrollment di-upload dalam format PDF.
                    </p>
                    <b class="mt-3">
                        Apakah ada biaya tambahan bila tim saya berhasil lolos ke
                        semifinal?
                    </b>
                    <p>
                        Ada biaya tambahan yang harus dibayar setiap orang yaitu
                        <b>Rp250.000,-</b>. Biaya ini digunakan untuk akomodasi selama 3 hari di Bandung.
                    </p>
                    <b class="mt-3">
                        Apakah bila ingin mengikuti seminar harus membayar kembali?
                    </b>
                    <p>
                        Untuk peserta yang lolos ke semifinal, kalian tidak perlu membayar
                        untuk seminar lagi.
                    </p>
                    <div class="mt-4">
                        If you have any more questions, don't hesitate to contact:
                        <ul>
                            <li>Petra: (+62) 857 9749 8411 or LINE ID: petragtrr</li>
                            <li>Adini: (+62) 857 1826 8785 or LINE ID: adzhr10</li>
                            <li>Email: <a href="mailto:event@bistleague.com">event@bistleague.com</a></li>
                        </ul>
                    </div>
                </BLCenterWrap>
            </v-tab-item>
        </v-tabs-items>
        <BLFooter/>
    </div>
</template>

<script>
    import BLToolbar from "./partials/BLToolbar";
    import BLCenterWrap from "./partials/BLCenterWrap";
    import BLFooter from "./partials/BLFooter";
    export default {
        name: "Competition",
        components: {BLFooter, BLCenterWrap, BLToolbar},
        data() {
            return {
                tab: (this.$router.currentRoute.path === '/competition/faq') ? 1 : 0,
                competitionUrl: `${process.env.VUE_APP_DASHBOARD_BASE_URL}/competition`,
                rulebookUrl: process.env.VUE_APP_COMPETITION_RULEBOOK_URL
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
