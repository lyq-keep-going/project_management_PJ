<template>
    <div class="content">
        <el-row :gutter="20">
            <el-col :span="6" v-for="item in list">
                <Course :info="item" />
            </el-col>
        </el-row>
        <br />
        <div>
            <el-pagination
                :page-size="pageSize"
                layout="prev, pager, next"
                :currentPage="pageNum"
                :total="total"
                @current-change="handlePageClick"
                background
            ></el-pagination>
        </div>
    </div>
</template>
<script>
import Course from "../../components/Course.vue";

export default {
    data() {
        return {
            pageNum: 1,
            pageSize: 8,
            totalPage: 5,
            total: 35,
            list: [{
                "id": 3,
                "pictures": [
                    "https://url.cy/X3pCA3",
                    "https://url.cy/X3pCA3",
                    "https://url.cy/X3pCA3"
                ],
                "lessonName": "",
                "lessonNumber": "",
                "teacherName": "",
                "semester": "秋季",
                "credit": 3
            }]
        }
    },
    components: {
        Course
    },
    methods: {
        getMyFavoriteCourse(pageNum, pageSize) {
            let url = `/api/ums/myFavor/lesson?pageNum=${pageNum}&pageSize=${pageSize}`;

            this.axios
                .get(url)
                .then((response) => {
                    let res = response.data.data
                    console.log(res);

                    this.list = res.list
                    this.total = res.total
                    this.totalPage = parseInt(res.totalPage)
                    this.pageNum = parseInt(res.pageNum)
                })
                .catch((error) => console.log(error));
        },
        handlePageClick(nextPage) {
            this.getMyFavoriteCourse(nextPage, this.pageSize)
        },
    },
    mounted() {
        this.getMyFavoriteCourse(this.pageNum, this.pageSize)
    },
}
</script>

<style>
.content {
    width: 90%;
    margin: auto;
}
</style>