<template>
    <div v-for="item in list">
        <el-card class="box-card" shadow="hover">
            <template #header>
                <div class="card-header">
                    <el-row>
                        <el-col :span="4">
                            <el-row>
                                <el-col :span="24">
                                    <el-avatar shape="square" :size="40" :src="item.user.avatar"></el-avatar>
                                </el-col>
                                <el-col :span="24">
                                    <span>{{ item.user.username }}</span>
                                </el-col>
                            </el-row>
                        </el-col>
                        <el-col :span="20">
                            <h3>{{ item.title }}</h3>
                        </el-col>
                    </el-row>
                </div>
            </template>
            <p style="text-align:left">
                {{ item.content }}
                <el-tag type="info">{{ item.issueTime }}</el-tag>
            </p>
        </el-card>
    </div>

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
</template>

<script lang="ts">
export default {
    data() {
        return {
            pageNum: 1,
            pageSize: 8,
            total: 0,
            list: []
        }
    },
    methods: {
        getMyPostList(pageNum, pageSize) {
            let url = `/api/ums/myTopicList?pageNum=${pageNum}&pageSize=${pageSize}&isMine=true`; // https://bbs.fitymistudio.cn/api/mms/msgList

            this.axios
                .get(url)
                .then((response) => {
                    console.log(response.data.data);
                    let res = response.data.data

                    this.list = res.list
                    this.total = res.total
                    this.totalPage = parseInt(res.totalPage)
                    this.pageNum = parseInt(res.pageNum)
                })
                .catch((error) => console.log(error));
        },
        handlePageClick(nextPage) {
            this.getMyPostList(nextPage, this.pageSize)
        },
    },
    mounted() {
        this.getMyPostList(this.pageNum, this.pageSize)
    },
}
</script>

<style>
.box-card {
    margin: 20px;
}
</style>