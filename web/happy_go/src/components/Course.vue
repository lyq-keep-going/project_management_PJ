<template>
    <el-card class="courseCard" shadow="hover">
        <div class="block">
            <el-carousel>
                <el-carousel-item v-for="pic in info.pictures" :key="pic">
                    <img :src="pic" />
                </el-carousel-item>
            </el-carousel>
        </div>

        <h3>课程名称：{{ info.lessonName }}</h3>

        <el-button type="primary" @click="dialogVisible = true">查看详细信息</el-button>
        <div style="text-align: left;">
            <el-dialog v-model="dialogVisible" title="详细信息" width="60%">
                <div>
                    <el-form label-width="80px" :model="info" label-position="left">
                        <el-form-item label="课程名称">{{ info.lessonName }}</el-form-item>
                        <el-form-item label="课程编号">{{ info.lessonNumber }}</el-form-item>
                        <el-form-item label="授课老师">{{ info.teacherName }}</el-form-item>
                        <el-form-item label="开课学期">{{ info.semester }}</el-form-item>
                        <el-form-item label="课程学分">{{ info.credit }}</el-form-item>
                    </el-form>
                </div>
            </el-dialog>
        </div>
    </el-card>
</template>

<script lang="ts">
export default {
    data() {
        return {
            dialogVisible: false
        }
    },
    props: {
        info: {
            type: Object,
            default: () => { }
        }
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
.courseCard img {
    width: 100%;
}
</style>
