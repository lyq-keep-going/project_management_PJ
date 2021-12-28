<template>
    <div class="content">
        <el-row :gutter="20">
            <el-col :span="12" v-for="item in list">
                <Course :info="item" />
            </el-col>
        </el-row>
        <div class="pagination" v-if="list == []">
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
            // https://bbs.fitymistudio.cn/api/ums/favorite?pageNum=2&pageSize=8
            let url = `api/lms/favorite?pageNum=${pageNum}&pageSize=${pageSize}`;

            this.axios
                .get(url)
                .then((response) => {
                    let res = response.data.data
                    console.log(res);

                    this.list = res
                    this.total = res.total
                    this.totalPage = parseInt(res.totalPage)
                    this.pageNum = parseInt(res.pageNum)

                    console.log(this.list);
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

<style scoped>
.content {
    width: 90%;
    margin: auto;
}

.pagination {
    margin: 20px;
}
</style>