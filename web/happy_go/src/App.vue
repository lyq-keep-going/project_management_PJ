<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
</script>

<template>
  <el-menu default-active="/" mode="horizontal" :router="true">
    <el-menu-item index="/">
      <el-icon>
        <shopping-cart-full />
      </el-icon>主页
    </el-menu-item>
    <el-menu-item index="/login">
      <el-icon>
        <user-filled />
      </el-icon>登录
    </el-menu-item>
    <el-menu-item index="/register">
      <el-icon>
        <user />
      </el-icon>注册
    </el-menu-item>
    <el-menu-item index="/personalCenter">
      <el-icon>
        <avatar />
      </el-icon>
      <span>个人中心</span>
    </el-menu-item>
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
