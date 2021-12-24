<template>
    <div class="content">
        <el-row>
            <el-col :span="24">
                <el-avatar shape="square" :size="70" :src="avatar"></el-avatar>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <p>{{ username }}</p>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <p>学号：{{ studentId }}</p>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <p>联系方式：{{ phone }}</p>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <p>个人描述：{{ description }}</p>
            </el-col>
        </el-row>
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
            let url = "/api/ums/info"; // https://bbs.fitymistudio.cn/api/ums/login

            this.axios
                .get(url)
                .then((response) => {
                    let res = response.data
                    // console.log(response);
                    this.$store.commit('setUsername', res.data.username)
                    this.avatar = res.data.avatar
                    this.description = res.data.description
                    this.studentId = res.data.studentId
                    this.username = res.data.username
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