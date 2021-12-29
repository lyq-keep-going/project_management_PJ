<template>
    <div class="content">
        <el-form ref="form" label-width="200px">
            <el-avatar shape="square" :size="70" :src="avatar"></el-avatar>
            <el-form-item label="用户名">
                <el-input v-model="username"></el-input>
            </el-form-item>
            <el-form-item label="学号">
                <el-input v-model="studentId"></el-input>
            </el-form-item>
            <el-form-item label="个人描述">
                <el-input v-model="description"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">修改个人信息</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>

export default {
    data() {
        return {
            avatar: "",
            description: "",
            phone: "",
            studentId: "",
            username: "",
            nickName: "",
            userId: 0
        }
    },
    mounted() {
        this.getInformation()
    },
    methods: {
        getInformation() {
            let url = "/api/ums/info"; // https://bbs.fitymistudio.cn/api/ums/login

            this.axios
                .get(url)
                .then((response) => {
                    let res = response.data.data
                    // console.log(res);
                    if (res.username != null) {
                        this.$store.commit('setUsername', res.username)
                        localStorage.setItem("username", res.username);
                    }
                    else
                        this.$message.warning("请设置用户名！")

                    this.avatar = res.avatar
                    this.description = res.description
                    this.studentId = res.studentId
                    this.username = res.username
                    this.userId = res.id
                })
                .catch((error) => console.log(error));
        },
        onSubmit() {
            let url = "/api/ums/info"; // https://bbs.fitymistudio.cn/api/ums/login
            let info = {
                userId: this.userId,
                username: this.username,
                nickName: this.nickName,
                description: this.description,
            }
            this.axios
                .put(url, info)
                .then((response) => {
                    let res = response.data
                    this.$message.info(res.message)
                })
                .catch((error) => console.log(error));
        }
    }
}
</script>

<style scoped>
.content {
    width: 90%;
    margin: auto;
    min-height: calc(100vh - 93px);
}

.info {
    text-align: left;
    /* margin: 60px 30%; */
}
</style>