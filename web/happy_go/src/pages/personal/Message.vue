<template>
    <div v-for="item in list">
        <el-card shadow="hover" class="imessage">
            <el-row>
                <el-col :span="4">
                    <el-avatar shape="square" :size="70" :src="item.sender.avatar"></el-avatar>
                    <br />
                    <el-badge
                        :is-dot="!item.last_message.read"
                        class="item"
                    >{{ item.sender.username }}</el-badge>
                </el-col>
                <el-col :span="16">
                    <p style="text-align: left;">{{ item.last_message.content }}</p>
                </el-col>
                <el-col :span="4">
                    <el-tag>{{ item.last_message.issueTime }}</el-tag>
                </el-col>
            </el-row>
        </el-card>
    </div>
    <div class="block">
        <el-pagination
            :page-size="pageSize"
            layout="prev, pager, next"
            :currentPage="pageNum"
            :total="total"
            @current-change="handleCurrentChange"
            background
        ></el-pagination>
    </div>
</template>

<script lang="ts">
export default {
    data() {
        return {
            total: 0,
            totalPage: 1,
            pageNum: 1,
            pageSize: 8,
            list: [],
        }
    },
    mounted() {
        this.getInform(this.pageNum, this.pageSize)
    },
    methods: {
        getInform(pageNum, pageSize) {
            let url = `/api/mms/msgList?pageNum=${pageNum}&pageSize=${pageSize}`; // https://bbs.fitymistudio.cn/api/mms/msgList

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
        handleCurrentChange(nextPage) {
            this.getInform(nextPage, this.pageSize)
        }
    }
}
</script>

<style>
.imessage {
    margin: 20px;
}
</style>