<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <div>
        <v-layout>
            <v-flex xs12 md10 offset-md1 lg8 offset-lg2 xl6 offset-xl3>
                <v-toolbar flat color="transparent">
                    <v-toolbar-title>
                        <v-img :src="require('../../assets/logo.png')" width="30"></v-img>
                    </v-toolbar-title>
                    <v-toolbar-title class="subheading font-weight-bold">
                        BIST League 2.0
                    </v-toolbar-title>

                    <v-spacer></v-spacer>

                    <v-toolbar-items class="hidden-sm-and-down">
                        <v-btn flat class="text-none" to="/">Home</v-btn>
                        <v-btn flat class="text-none" to="/competition">Competition</v-btn>
                        <v-btn flat class="text-none" :href="loginUrl">Login</v-btn>
                        <!--<v-btn flat class="text-none" to="/seminar">Seminar</v-btn>-->
                    </v-toolbar-items>
                    <v-toolbar-items class="hidden-md-and-up">
                        <v-menu offset-y>
                            <v-btn icon slot="activator"><v-icon>menu</v-icon></v-btn>
                            <v-list>
                                <v-list-tile to="/" exact>
                                    <v-list-tile-title>Home</v-list-tile-title>
                                </v-list-tile>
                                <v-list-tile to="/competition" exact>
                                    <v-list-tile-title>Competition</v-list-tile-title>
                                </v-list-tile>
                                <!--<v-list-tile to="/seminar" exact>-->
                                    <!--<v-list-tile-title>Seminar</v-list-tile-title>-->
                                <!--</v-list-tile>-->
                                <v-list-tile :href="loginUrl" style="color: inherit">
                                    <v-list-tile-title>Login</v-list-tile-title>
                                </v-list-tile>
                            </v-list>
                        </v-menu>
                    </v-toolbar-items>
                </v-toolbar>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
    export default {
        name: "BLToolbar",
        data() {
            return {
                loginUrl: `${process.env.VUE_APP_DASHBOARD_BASE_URL}/login`
            }
        }
    }
</script>

<style scoped>

</style>