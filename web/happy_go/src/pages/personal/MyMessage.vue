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
                    <p style="text-align: left;">
                        {{ item.last_message.content }}
                        <el-tag type="info">{{ item.last_message.issueTime }}</el-tag>
                    </p>
                </el-col>
                <el-col :span="4">
                    <el-button
                        type="primary"
                        @click="dialogVisible = true, getDialogue(item.sender.username, item.sender.id, MpageNum, MpageSize)"
                    >展开</el-button>
                </el-col>
            </el-row>
        </el-card>
    </div>

    <el-dialog v-model="dialogVisible" title="对话框" width="80%" top="5vh" :before-close="clearM">
        <div class="dialogue">
            <ul v-infinite-scroll="handleMPageClick" class="infinite-list" style="overflow: auto">
                <li v-for="item in Mlist" :key="item" class="infinite-list-item">
                    <p>{{ item.senderId == receiverId ? MuserName : myName }}</p>
                    <p>{{ item.content }}</p>
                    <el-divider></el-divider>
                </li>
            </ul>
        </div>

        <el-input v-model="content" @keyup.enter.native="sendMyMessage">
            <template #append>
                <el-button type="primary" @click="sendMyMessage">发送</el-button>
            </template>
        </el-input>
    </el-dialog>

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
            // 消息列表
            total: 0,
            totalPage: 1,
            pageNum: 1,
            pageSize: 8,
            list: [],
            // 具体消息
            dialogVisible: false,
            receiverId: 0,
            MuserName: "",
            Mtotal: 0,
            MtotalPage: 1,
            MpageNum: 1,
            MpageSize: 20,
            Mlist: [],
            content: ""
        }
    },
    mounted() {
        this.getMyMessageList(this.pageNum, this.pageSize)
    },
    computed: {
        myName: {
            get() {
                return this.$store.state.username
            },
            set: function () {
            }
        }
    },
    methods: {
        getMyMessageList(pageNum, pageSize) {
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
        getDialogue(MuserName, userId, MpageNum, MpageSize) {
            this.receiverId = userId
            this.MuserName = MuserName

            let url = `/api/mms/msgList?pageNum=${MpageNum}&pageSize=${MpageSize}&userId=${userId}`; // https://bbs.fitymistudio.cn/api/mms/msgList

            this.axios
                .get(url)
                .then((response) => {
                    let res = response.data.data
                    console.log(res);

                    this.Mlist = this.Mlist.concat(res.list)
                    this.Mtotal = res.total
                    this.MtotalPage = parseInt(res.totalPage)
                    this.MpageNum++
                })
                .catch((error) => console.log(error));
        },
        handlePageClick(nextPage) {
            this.getMyMessageList(nextPage, this.pageSize)

        },
        clearM(done) {
            this.Mlist = []
            this.receiverId = 0
            this.MuserName = ""
            this.Mtotal = 0
            this.MtotalPage = 1
            this.MpageNum = 1
            this.Mlist = []
            this.content = ""
            done()
        },
        handleMPageClick() {
            console.log(this.MuserName, this.receiverId, this.MpageNum, this.MpageSize);
            this.getDialogue(this.MuserName, this.receiverId, this.MpageNum, this.MpageSize)
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
                })
                .catch((error) => console.log(error));
        }
    }
}
</script>

<style >
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
</style>