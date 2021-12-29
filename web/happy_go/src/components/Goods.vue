<template>
    <el-card class="courseCard" shadow="hover">
        <div>
            <el-carousel>
                <el-carousel-item v-for="item in info.pictures" :key="item">
                    <img :src="item.url" />
                </el-carousel-item>
            </el-carousel>
        </div>
        <h4>《{{ info.bookName }}》</h4>

        <el-button type="primary" @click="dialogVisible = true">查看详细信息</el-button>
        <el-dialog v-model="dialogVisible" title="详细信息" width="80%">
            <div style="text-align: left;">
                <el-form label-width="120px" :model="info" label-position="left">
                    <el-form-item label="卖家">{{ info.seller.username }}</el-form-item>

                    <el-row>
                        <el-col :span="12">
                            <el-form-item label="课程名称">{{ info.lesson.lessonName }}</el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="书籍名称">《{{ info.name }}》</el-form-item>
                        </el-col>
                    </el-row>

                    <el-row>
                        <el-col :span="12">
                            <el-form-item label="作者">{{ info.author }}</el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="出版社">{{ info.publisher }}</el-form-item>
                        </el-col>
                    </el-row>

                    <el-row>
                        <el-col :span="12">
                            <el-form-item label="新旧程度">{{ info.newDegree }}</el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="价格">
                                <el-tag type="success">{{ info.unit + info.price }}</el-tag>
                            </el-form-item>
                        </el-col>
                    </el-row>

                    <el-form-item label="书籍内容">{{ info.content }}</el-form-item>
                </el-form>
            </div>
        </el-dialog>
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
    // mounted() {
    //     console.log(this.info)
    // }
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