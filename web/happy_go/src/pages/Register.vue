<template>
  <div id="RegisterForm">
    <h1>注册</h1>
    <el-form ref="form" :model="form" label-width="80px" label-position="left">
      <el-form-item label="学号">
        <el-input v-model="form.studentId"></el-input>
      </el-form-item>
      <el-form-item label="昵称">
        <el-input v-model="form.nickname"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input v-model="form.password" type="password" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="pass">
        <el-input v-model="form.checkPwd" type="password" autocomplete="off"></el-input>
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
        studentId: "",
        nickname: "",
        password: "",
        checkPwd: "",
      },
    };
  },
  methods: {
    onSubmit() {
      if (this.form.studentId == ""
        || this.form.nickname == ""
        || this.form.password == ""
        || this.form.checkPwd == ""
      )
        this.$message.warning("请填完表格！");

      if (this.form.password != this.form.checkPwd)
        this.$message.warning("确认密码和密码不一致！");

      let url = "/api/ums/register"

      console.log(this.form);

      this.axios
        .post(url, this.form)
        .then(response => {
          this.$message.success(response.data.message);
          // console.log(response);
        })
        .catch((error) => {
          console.log(error)
        });
    }
  },
};
</script>