<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
</script>

<template>
  <el-affix :offset="0">
    <el-menu default-active="/" mode="horizontal" :router="true">
      <el-menu-item index="/">
        <el-icon>
          <shopping-cart-full />
        </el-icon>主页
      </el-menu-item>

      <el-menu-item index="/login" v-if="!isLogin" style="right: 96px; position: fixed;">
        <el-icon>
          <user-filled />
        </el-icon>登录
      </el-menu-item>

      <el-menu-item index="/register" v-if="!isLogin" style="right: 0; position: fixed;">
        <el-icon>
          <user />
        </el-icon>注册
      </el-menu-item>

      <el-menu-item index="/personalCenter" v-if="isLogin" style="right: 96px; position: fixed;">
        <el-icon>
          <avatar />
        </el-icon>个人中心
      </el-menu-item>

      <el-menu-item index v-if="isLogin" @click="logOut()" style="right: 0; position: fixed;">
        <el-icon>
          <guide />
        </el-icon>退出
      </el-menu-item>
    </el-menu>
  </el-affix>

  <router-view></router-view>
</template>

<script>
export default {
  data() {
    return {
      // isLogin: false
    }
  },
  methods: {
    logOut() {
      localStorage.removeItem("flag")
      localStorage.removeItem("token")
      localStorage.removeItem("tokenHead")
      this.$store.commit("userLogout")
      this.$router.push("/")

      let url = "/api/ums/logout"; // https://bbs.fitymistudio.cn/api/ums/login

      this.axios
        .post(url)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => console.log(error));

      this.$message.info("退出成功！")
      location.reload();
    }
  },
  computed: {
    isLogin: {
      get() {
        return this.$store.state.isLogin
      },
      set: function () {
      }
    }
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
