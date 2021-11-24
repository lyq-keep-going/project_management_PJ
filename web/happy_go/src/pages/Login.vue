<template>
    <div id="loginForm">
        <h1>登录</h1>
        <el-form ref="form" :model="form" label-width="60px">
            <el-form-item label="学号">
                <el-input v-model="form.id"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pass">
                <el-input v-model="form.pwd" type="password" autocomplete="off"></el-input>
            </el-form-item>

            <el-button type="primary" @click="onSubmit">登录</el-button>
        </el-form>
    </div>
</template>

<style>
#loginForm {
    width: 40%;
    margin: auto;
}
</style>

<script lang="ts">
export default {
    data() {
        return {
            form: {
                id: '',
                pwd: ''
            },
        }
    },
    methods: {
        onSubmit() {
            console.log('submit!')
        },
    },
}
</script>