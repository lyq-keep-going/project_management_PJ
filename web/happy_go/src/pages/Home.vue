<template>
  <el-main>
    <router-view></router-view>
    <!--
    <el-header class="sub-title">正在团购</el-header>
    <el-row>
      <el-col
        v-for="(o, index) in 4"
        :key="o"
        :span="4"
        :offset="index > 0 ? 2 : 1"
      >
        <el-card :body-style="{ padding: '0px' }" shadow="hover">
          <div style="padding: 14px">
            <span>Yummy hamburger</span>
            <div class="bottom">
            
              <el-button type="text" class="button">Operating</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
-->

    <el-container>
      <el-main class="right" id="main_top"
        ><h2>商城</h2>
        <el-carousel :interval="4000" type="card" height="200px">
          <el-carousel-item v-for="obj in list_left" :key="obj">
            <h3 class="medium">{{ obj.title }}</h3>
          </el-carousel-item>
        </el-carousel>
      </el-main>
    </el-container>

    <div class="result">
      <el-header class="sub-title">热门课程</el-header>
      <el-row>
        <el-col v-for="obj in list" :key="obj" :span="4" :offset="2">
          <el-card
            :body-style="{ padding: '0px' }"
            class="card"
            shadow="hover"
            @click.native="seeDetail(obj.id)"
          >
            <img src="../assets/book.png" class="image" />

            <div style="padding: 14px" class="info">
              <p>
                <span></span><span>{{ obj.name }}</span>
              </p>
              <p>
                {{ obj.lessonName }}
              </p>
              <p>
                <span style="color: rgb(117, 117, 117)">开课学期：</span>
                <span>{{ obj.semester }}</span>
              </p>

              <p>
                <span style="color: rgb(117, 117, 117)">授课教师：</span
                ><span>{{ obj.teacherName }}</span>
              </p>
              <div class="bottom">
                <el-button type="text" class="button" @click="seeDetail(obj.id)"
                  >查看详情</el-button
                >
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
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
        currentDate: null,
      },
      list: "",
      list_left: [{ title: "二手书" }, { title: "PPT" }, { title: "笔记" }],
    };
  },
  methods: {
    getHotCourses(_pageNum) {
      var url = "/api/lms/lessonList?";

      axios({
        method: "get",
        url: url,
        params: {
          pageNum: _pageNum,
          pageSize: 8,
          filter: "hot",
        },
        headers: {
          Authorization: "BearerJhbG",
        },
      })
        .then((response) => {
          //this.list = response.data.data.list.slice(0, 4);
          this.list = response.data.data.list;
          console.log(this.list);
        })
        .catch((error) => console.log(error));
    },

    seeDetail(_id) {
      this.$router.push({
        name: "CourseDetail",
        params: {
          id: _id,
        },
      });
    },
  },

  mounted() {
    this.getHotCourses(1);
  },
};
</script>

<style>
.el-card{
padding: 10px;
margin-bottom: 20px;
}
.el-card img{
  width: 80%;
}
.result{

}
#main_top {
  line-height: 50px;
  padding-left: 50px;
  padding-right: 50px;
}

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

.span {
  display: block;
}
.info {
  margin-top: 13px;
  line-height: 12px;
  display: inline;
  justify-content: space-between;
  align-items: center;
}

.pre {
  color: rgb(117, 117, 117);
}
</style>

