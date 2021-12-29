<template>
    <div id="loginForm">
        <h1>登录</h1>
        <el-form ref="form" :model="form" label-width="60px">
            <el-form-item label="学号">
                <el-input v-model="form.studentId"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pass">
                <el-input v-model="form.password" type="password" autocomplete="off"></el-input>
            </el-form-item>

            <el-button type="primary" @click="onSubmit">登录</el-button>
        </el-form>
    </div>
</template>

<script lang="ts">
export default {
    data() {
        return {
            form: {
                studentId: '',
                password: ''
            },
        }
    },
    methods: {
        onSubmit() {
            let url = "/api/ums/login"

            this.axios
                .post(url, this.form)
                .then(response => {
                    let res = response.data

                    if (res.code == 200) {
                        console.log(res);

                        this.$message.success(res.message);
                        localStorage.setItem("tokenHead", res.data.tokenHead);
                        localStorage.setItem("token", res.data.token);
                        localStorage.setItem("flag", "isLogin");

                        this.$store.commit('userLogin')
                        this.$router.push("/");
                    }
                    else {
                        this.$message.error(res.message);
                    }
                })
                .catch((error) => {
                    console.log(error)
                    this.$message.error("登陆失败，请重试！");
                });
        }
    },
}
</script>

<style>
#loginForm {
    width: 40%;
    margin: auto;
}
</style>