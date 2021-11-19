<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
</script>

<template>
  <el-menu default-active="/" mode="horizontal" router="true">
    <el-menu-item index="/">主页</el-menu-item>
    <el-menu-item index="/login">登录</el-menu-item>
    <el-menu-item index="/register">注册</el-menu-item>
    <el-menu-item index="/personalCenter">个人中心</el-menu-item>
  </el-menu>

  <router-view></router-view>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
