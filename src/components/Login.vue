<template>
    <div>
    </div>
</template>

<script>
    export default {
        name: "Login",
        mounted() {
            window.location.href = process.env.VUE_APP_DASHBOARD_BASE_URL + "/login"
        }
    }
</script>

<style scoped>
</style>
