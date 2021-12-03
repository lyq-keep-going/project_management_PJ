<template>
    <el-card class="courseCard" shadow="hover">
        <img src="../assets/logo.png" />
        <div>
            <h3>物品名</h3>
            <p>物品描述</p>
        </div>
    </el-card>
</template>

<script lang="ts">
export default {
    data() {
        return {}
    },
    methods: {

    },
}
</script>

<style>
.courseCard {
    width: 100%;
    margin-top: 20px;
}
.courseCard img {
    width: 80%;
}
</style>
