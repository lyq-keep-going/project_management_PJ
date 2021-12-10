<template>
    <div class="content">
        <el-avatar shape="square" :size="80" :src="avatar"></el-avatar>
        <div class="info">
            <p>用户名：{{ username }}</p>
            <p>学号：{{ studentId }}</p>
            <p>联系方式：{{ phone }}</p>
            <p>个人描述：{{ description }}</p>
        </div>
        <el-button type="primary" @click="quit()">退出</el-button>
    </div>
</template>
<script>

export default {
    data() {
        return {
            avatar: "http://dummyimage.com/80x80/#FF6600'",
            description: "务张海参地位积易亲也县张阶市。",
            phone: "19174161036",
            studentId: "39188142142",
            username: "任娟"
        }
    },
    mounted() {
        this.getInformation()
    },
    methods: {
        getInformation() {
            let url = "/api/info"; // https://bbs.fitymistudio.cn/api/ums/login

            this.axios
                .get(url)
                .then((response) => {
                    let res = response.data
                    console.log(response);
                    this.avatar = res.data.avatar
                    this.description = res.data.description
                    this.studentId = res.data.studentId
                    this.username = res.data.username
                })
                .catch((error) => console.log(error));
        },
        quit() {
            localStorage.removeItem("flag")
            localStorage.removeItem("token")
            localStorage.removeItem("tokenHead")
            this.$store.commit("userLogout")
            this.$router.push("/")
        },
    }
}
</script>

<style scoped>
.content {
    width: 90%;
    margin: auto;
    padding-top: 80px;
}

.info {
    text-align: left;
    margin: 60px 30%;
}
</style>