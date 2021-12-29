<template>
    <div v-for="item in list">
        <el-card shadow="hover" class="imessage">
            <el-row>
                <el-col :span="4">
                    <el-row>
                        <el-col :span="24">
                            <el-avatar shape="square" :size="70" :src="item.interlocutor.avatar"></el-avatar>
                        </el-col>
                        <el-col :span="24">
                            <el-badge
                                :is-dot="!item.lastMessage.read"
                                class="item"
                            >{{ item.interlocutor.username }}</el-badge>
                        </el-col>
                    </el-row>
                </el-col>
                <el-col :span="16">
                    <p style="text-align: left;">
                        {{ item.lastMessage.content }}
                        <el-tag type="info">{{ item.lastMessage.issueTime }}</el-tag>
                    </p>
                </el-col>
                <el-col :span="4">
                    <el-button
                        type="primary"
                        @click="dialogVisible = true, getDialogue(item.interlocutor.username, item.interlocutor.id, messagePageNum, messagePageSize)"
                    >展开</el-button>
                </el-col>
            </el-row>
        </el-card>
    </div>

    <el-dialog v-model="dialogVisible" title="对话框" width="80%" top="5vh" :before-close="clearM">
        <div class="dialogue">
            <div>
                <el-row :gutter="0" v-for="item in messageList" :key="item">
                    <el-col :span="12" :offset="item.senderId == receiverId ? 0 : 12">
                        <div>
                            <p>{{ item.senderId == receiverId ? messageUsername : myName }}：{{ item.content }}</p>
                            <el-tag type="info">{{ item.issueTime }}</el-tag>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </div>

        <el-input v-model="content" @keyup.enter.native="sendMyMessage">
            <template #append>
                <el-button type="primary" @click="sendMyMessage">发送</el-button>
            </template>
        </el-input>
    </el-dialog>

    <div class="pagination" v-if="list.length != 0">
        <el-pagination
            :page-size="pageSize"
            layout="prev, pager, next"
            :currentPage="pageNum"
            :total="total"
            @current-change="handlePageClick"
            background
        ></el-pagination>
    </div>

    <el-empty description="还没有内容" v-if="list.length == 0"></el-empty>
</template>

<script lang="ts">
export default {
    data() {
        return {
            // 消息列表
            total: 0,
            totalPage: 1,
            pageNum: 1,
            pageSize: 8,
            list: [],
            // 具体消息
            dialogVisible: false,
            receiverId: 0,
            messageUsername: "",
            messageTotal: 0,
            messageTotalPage: 1,
            messagePageNum: 1,
            messagePageSize: 20,
            messageList: [],
            content: "",
            myName: ""
        }
    },
    mounted() {
        this.getMyMessageList(this.pageNum, this.pageSize)
        this.myName = localStorage.getItem("username");
        // console.log(this.myName);
    },
    methods: {
        getMyMessageList(pageNum, pageSize) {
            let url = `/api/mms/msgList?pageNum=${pageNum}&pageSize=${pageSize}`; // https://bbs.fitymistudio.cn/api/mms/msgList

            this.axios
                .get(url)
                .then((response) => {
                    // console.log(response.data.data);
                    let res = response.data.data

                    this.list = res.list
                    this.total = res.total
                    this.totalPage = parseInt(res.totalPage)
                    this.pageNum = parseInt(res.pageNum)
                })
                .catch((error) => console.log(error));
        },
        getDialogue(messageUsername, userId, messagePageNum, messagePageSize) {
            this.receiverId = userId
            this.messageUsername = messageUsername

            let url = `/api/mms/msgList?pageNum=${messagePageNum}&pageSize=${messagePageSize}&userId=${userId}`; // https://bbs.fitymistudio.cn/api/mms/msgList

            this.axios
                .get(url)
                .then((response) => {
                    let res = response.data.data
                    // console.log(res);

                    this.messageList = this.messageList.concat(res.list)
                    this.messageTotal = res.total
                    this.messageTotalPage = parseInt(res.totalPage)
                    this.messagePageNum++
                })
                .catch((error) => console.log(error));
        },
        handlePageClick(nextPage) {
            this.getMyMessageList(nextPage, this.pageSize)
        },
        clearM(done) {
            this.messageList = []
            this.receiverId = 0
            this.messageUsername = ""
            this.messageTotal = 0
            this.messageTotalPage = 1
            this.messagePageNum = 1
            this.messageList = []
            this.content = ""
            done()
        },
        handleMessageClick() {
            // console.log(this.messageUsername, this.receiverId, this.messagePageNum, this.messagePageSize);
            this.getDialogue(this.messageUsername, this.receiverId, this.messagePageNum, this.messagePageSize)
        },
        sendMyMessage() {
            let url = `/api/mms/msg`; // https://bbs.fitymistudio.cn/api/mms/msg

            let msg = {
                receiverId: this.receiverId,
                content: this.content
            }
            this.axios
                .post(url, msg)
                .then((response) => {
                    this.$message(response.data.message)
                    this.getMyMessageList(this.pageNum, this.pageSize)
                    this.content = ""
                })
                .catch((error) => console.log(error));
        }
    }
}
</script>

<style scoped>
.imessage {
    margin: 20px;
}

.dialogue {
    max-height: 60vh;
    overflow-y: auto;
    margin-bottom: 20px;
}

.infinite-list {
    height: 300px;
    padding: 0;
    margin: 0;
    list-style: none;
    text-align: left;
}
.pagination {
    margin: 20px;
}
</style>