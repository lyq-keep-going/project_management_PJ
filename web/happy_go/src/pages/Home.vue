<template>
  <el-main>
    <h1>商城首页</h1>

    <div class="demo-input-suffix">
      <el-form ref="form" :model="form" label-width="120px">
        <el-input
          v-model="form.input"
          placeholder="搜索课程"
          prefix-icon="Search"
          @keyup.enter.native="onSubmit"
        />
        <button @click="onSubmit">aaaa</button>
      </el-form>
    </div>
    <el-header class="sub-title">正在团购</el-header>
    <el-row>
      <el-col v-for="(o, index) in 4" :key="o" :span="4" :offset="index > 0 ? 2 : 1">
        <el-card :body-style="{ padding: '0px' }">
          <div style="padding: 14px">
            <span>Yummy hamburger</span>
            <div class="bottom">
              <!-- <time class="time">{{ currentDate }}</time> -->
              <el-button type="text" class="button">Operating</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>

    <el-header class="sub-title">热门课程</el-header>
    <el-row>
      <el-col v-for="(o, index) in 4" :key="o" :span="4" :offset="index > 0 ? 2 : 1">
        <el-card :body-style="{ padding: '0px' }">
          <img src="../assets/logo.png" class="image" />
          <div style="padding: 14px">
            <span>Yummy hamburger</span>
            <div class="bottom">
              <!-- <time class="time">{{ currentDate }}</time> -->
              <el-button type="text" class="button">Operating</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </el-main>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      form: {
        input: "",
        currentDate: null
      },
    };
  },
  methods: {
    onSubmit() {
      var url = "https://bbs.fitymistudio.cn/api/lms/lessonList?filter=query";

      axios({
        method: "get",
        url: url,
        params: {
          pageNum: 1,
          pageSize: 3,
          keys: this.form.input,
        },
        headers: {
          Authorization: "BearerJhbG",
        },
      })
        .then((response) => {
          this.$message.success(response);
        })
        .catch((error) => console.log(error));
    },
    onload() {

    }
  },
};
</script>

<style>
.demo-input-label {
  display: inline-block;
  width: 130px;
}

.demo-input-suffix {
  margin-bottom: 16px;
}

.sub-title {
  font-size: 24px;
  text-align: left;
  padding-top: 10px;
  padding-left: 50px;
}
.el-main {
  margin: 10px;
}
.el-form {
  padding-left: 50px;
  padding-right: 50px;
}
</style>

