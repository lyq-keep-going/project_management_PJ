

<template>
  <el-main>
    <div style="margin-top: 15px">
      <el-form ref="form" :model="form" label-width="120px">
        <el-input
          v-model="form.input"
          placeholder="搜索课程"
          @keyup.enter.native="onSubmit"
        >
          <template #prepend>
      
     
          </template>
          <template #append>
            <el-button @click="onSubmit">
              <el-icon class="el-input__icon"><search /></el-icon>
              搜索</el-button
            >
          </template>
        </el-input>
      </el-form>
    </div>
  </el-main>
</template>


<script>
import axios from "axios";

export default {
  data() {
    return {
      form: {
        input: "",
      },
    };
  },
  methods: {
    onSubmit() {
      this.$router.push({
        name: "SearchResult",
        params: {
          key: this.form.input,
        },
      });
    },
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