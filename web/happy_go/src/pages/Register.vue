<template>
  <div id="RegisterForm">
    <h1>注册</h1>
    <el-form ref="form" :model="form" label-width="80px" label-position="left">
      <el-form-item label="学号">
        <el-input v-model="form.id"></el-input>
      </el-form-item>
      <el-form-item label="昵称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input
          v-model="form.pwd"
          type="password"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="pass">
        <el-input
          v-model="form.checkPwd"
          type="password"
          autocomplete="off"
        ></el-input>
      </el-form-item>

      <el-button type="primary" @click="onSubmit">注册</el-button>
    </el-form>
  </div>
</template>

<style>
#RegisterForm {
  width: 40%;
  margin: auto;
}
</style>

<script lang="ts">
export default {
  data() {
    return {
      form: {
        id: "",
        name: "",
        pwd: "",
        checkPwd: "",
      },
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
  },
};
</script>