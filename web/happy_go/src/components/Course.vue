<template>
    <el-card class="courseCard" shadow="hover">
        <div class="block">
            <el-carousel>
                <el-carousel-item v-for="item in 4" :key="item">
                    <img src="../assets/logo.png" />
                </el-carousel-item>
            </el-carousel>
        </div>
        <div>
            <h3>课程</h3>
            <p>课程简介</p>
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

<style scoped>
.courseCard {
    width: 100%;
    margin-top: 20px;
}
</style>
