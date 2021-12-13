<template>
  <el-main>
    <h1>课程页面</h1>
    {{ id }}
    <div class="main">
      <div class="courseDetail">
        <p>
          <span>{{ courseDetail.lessonName }}</span>
        </p>
        <p>
          <span>{{ courseDetail.lessonNumber }}</span>
        </p>

        <p>
          <span style="color: rgb(117, 117, 117)">授课教师：</span
          ><span>{{ courseDetail.teacherName }}</span>
        </p>
        <p>
          <span style="color: rgb(117, 117, 117)">开课学期：</span
          ><span>{{ courseDetail.semester }}</span>
        </p>
        <p>
          <span style="color: rgb(117, 117, 117)">学分：</span>
          <span>{{ courseDetail.credit }}</span>
        </p>
      </div>

      <div class="bottom">
        <el-header>讨论区</el-header> <el-header>交易区</el-header>
      </div>
    </div>
  </el-main>
</template>


<script>
import axios from "axios";

export default {
  data() {
    return {
      id: "",
      courseDetail: "",
    };
  },
  methods: {
    loadDetail(_id) {
     // var url = "https://bbs.fitymistudio.cn/api/lms/info?";
      var url = "/api/lms/info?";

      axios({
        method: "get",
        url: url,
        params: {
          id: _id,
        },
        headers: {
          Authorization: "BearerJhbG",
        },
      })
        .then((response) => {
          this.courseDetail = response.data.data;
          console.log(response.data.data);
        })
        .catch((error) => console.log(error));
    },
  },

  mounted() {
    this.id = this.$route.params.id;
    this.loadDetail(this.id);
  },
};
</script>

<style >
.bottom{
  display: block;
}
</style>