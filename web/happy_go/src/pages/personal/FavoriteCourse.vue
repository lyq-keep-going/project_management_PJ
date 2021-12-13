<template>
    <div class="content">
        <el-row :gutter="20">
            <el-col :span="4" v-for="num in 10">
                <Course />
            </el-col>
        </el-row>
    </div>
</template>
<script>
import Course from "../../components/Course.vue";

export default {
    data() {
        return {}
    },
    components: {
        Course
    },
    methods: {

    },
}
</script>

<style>
.content {
    width: 90%;
    margin: auto;
}
</style>