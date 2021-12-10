<template>
    <div class="content">
        <el-avatar shape="square" :size="80">user.name</el-avatar>
        <p>user.name</p>
        <el-button type="primary" @click="quit()">退出</el-button>
    </div>
</template>
<script>

export default {
    data() {
        return {}
    },
    methods: {
        quit() {
            localStorage.removeItem("flag")
            localStorage.removeItem("token")
            localStorage.removeItem("tokenHead")
            this.$store.commit("userLogout")
        },
    }
}
</script>

<style>
.content {
    width: 90%;
    margin: auto;
    padding-top: 100px;
}
</style>