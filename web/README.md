# Web

## 使用方法

1. 启动项目

   ```cmd
   cd happy_go
   npm install
   npm run dev
   ```

2. 使用 axios

   示例

   ```js
   let url = "https://api.coindesk.com/v1/bpi/currentprice.json";

   this.axios
     .get(url)
     .then((response) => {
       console.log(response);
     })
     .catch((error) => console.log(error));
   ```

3. 跨域使用

   ```js
   let url = "/api/login"; // https://bbs.fitymistudio.cn/api/ums/login

   this.axios
     .post(url, this.form)
     .then((response) => {
       console.log(response);
     })
     .catch((error) => console.log(error));
   ```

4. 使用 router 和 store

   ```js
   this.$store.commit("userLogin");
   this.$router.push("/");
   ```

5. 获得 token

   ```js
   localStorage.getItem"token");
   ```

## 参考网址

1. [element](https://element-plus.gitee.io/zh-CN/)
2. [vuejs](https://v3.cn.vuejs.org/)
3. [vitejs](https://cn.vitejs.dev/)
4. [Vue Router](https://next.router.vuejs.org/zh/)
5. [vuex](https://vuex.vuejs.org/zh/)

### network error：chrome 浏览器关闭 cors

```sh
open -n /Applications/Google\ Chrome.app/ --args --disable-web-security  --user-data-dir=/Users/用户名/MyChromeDevUserData/
```
