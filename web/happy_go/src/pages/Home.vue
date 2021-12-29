<template>
  <el-main>
    <h1>商城首页</h1>
    <router-view></router-view>
    <!--
    <el-header class="sub-title">正在团购</el-header>
    <el-row>
      <el-col v-for="(o, index) in 4" :key="o" :span="4" :offset="index > 0 ? 2 : 1">
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
        ><h2>正在热购</h2>
        <el-carousel :interval="4400" type="card" height="330px">
          <el-carousel-item class="item">
            <h3 class="medium">二手书</h3>
            <div class="top_card">
              <el-row>
                <el-col v-for="obj in list_book" :key="obj" :span="8">
                  <el-card>
                    <!-- <img src="../assets/book.png" class="top_image" />-->

                    <div>
                      <span>{{ obj.bookName }}</span>
                      <span>{{ obj.author }}</span>
                      <p>
                        <span style="color: rgb(13, 22, 255)">售价：</span>
                        <span>{{ obj.price }}</span>
                      </p>
                    </div>
                  </el-card>
                </el-col>
              </el-row>
              <div class="top_bottom">
                <el-button type="text" class="button" @click="jumpBook()">查看更多</el-button>
              </div>
            </div>
          </el-carousel-item>

          <el-carousel-item class="item">
            <h3 class="medium">PPT</h3>
            <div class="top_card">
              <el-row>
                <el-col v-for="obj in list_ppt" :key="obj" :span="8">
                  <el-card>
                    <!-- <img src="../assets/book.png" class="top_image" />-->

                    <div>
                      <span>{{ obj.lesson.lessonName }}</span>
                      <p>
                        <span style="color: rgb(13, 22, 255)">售价：</span>
                        <span>{{ obj.price }}</span>
                      </p>
                    </div>
                  </el-card>
                </el-col>
              </el-row>
              <div class="top_bottom">
                <el-button type="text" class="button" @click="jumpPPT()">查看更多</el-button>
              </div>
            </div>
          </el-carousel-item>

          <el-carousel-item class="item">
            <h3 class="medium">笔记</h3>
            <div class="top_card">
              <el-row>
                <el-col v-for="obj in list_note" :key="obj" :span="8">
                  <el-card>
                    <!-- <img src="../assets/book.png" class="top_image" />-->

                    <div>
                      <span>{{ obj.lesson.lessonName }}</span>
                      <p>
                        <span style="color: rgb(13, 22, 255)">售价：</span>
                        <span>{{ obj.price }}</span>
                      </p>
                    </div>
                  </el-card>
                </el-col>
              </el-row>
              <div class="top_bottom">
                <el-button type="text" class="button" @click="jumpNote()">查看更多</el-button>
              </div>
            </div>
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
            @click.native="seeDetail(obj.lessonId)"
          >
            <img src="../assets/book.png" class="image" />

            <div style="padding: 14px" class="info">
              <p>
                <span></span>
                <span>{{ obj.name }}</span>
              </p>
              <p>{{ obj.lessonName }}</p>
              <p>
                <span style="color: rgb(117, 117, 117)">开课学期：</span>
                <span>{{ obj.semester }}</span>
              </p>

              <p>
                <span style="color: rgb(117, 117, 117)">授课教师：</span>
                <span>{{ obj.teacherName }}</span>
              </p>
              <div class="bottom">
                <el-button type="text" class="button" @click="seeDetail(obj.lessonId)">查看详情</el-button>
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
      list_title: [{ title: "二手书" }, { title: "PPT" }, { title: "笔记" }],
      list_left: "",
      list_book: "",
      list_ppt: "",
      list_note: "",
    };
  },
  methods: {
    getTop() {
      this.getBook();
      this.getPPT();
      this.getNote();
    },

    getBook() {
      var url = "/api/cms/books";

      axios({
        method: "get",
        url: url,
        params: { pageNum: 1, pageSize: 8 },
        headers: {
          Authorization: "BearerJhbG",
        },
      })
        .then((response) => {
          this.list_book = response.data.data.list.slice(0, 3);
          console.log(this.list_book);
        })
        .catch((error) => console.log(error));
    },

    getPPT() {
      var url = "/api/cms/ppts";

      axios({
        method: "get",
        url: url,
        params: { pageNum: 1, pageSize: 8 },
        headers: {
          Authorization: "BearerJhbG",
        },
      })
        .then((response) => {
          this.list_ppt = response.data.data.list.slice(0, 3);
        })
        .catch((error) => console.log(error));
    },

    getNote() {
      var url = "/api/cms/noteses";

      axios({
        method: "get",
        url: url,
        params: { pageNum: 1, pageSize: 8 },
        headers: {
          Authorization: "BearerJhbG",
        },
      })
        .then((response) => {
          this.list_note = response.data.data.list.slice(0, 3);
          console.log(this.list_note);
        })
        .catch((error) => console.log(error));
    },

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
         // console.log(response.data.data);
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

    jumpBook() {
      this.$router.push({
        name: "SearchResult",
        params: {
          url: "",
        },
      });
    },
    jumpPPT() { },
    jumpNote() { },
  },

  mounted() {
    this.getTop();
    this.getHotCourses(1);
  },
};
</script>

<style scoped>
.top_bottom {
  text-align: right;
  padding-right: 10px;
  padding-bottom: 10px;
}
.sel-carousel__item {
  background-color: #fcfcfc;
  padding-bottom: 20px;
}

.top_bottom {
  text-align: right;
  padding-right: 10px;
  padding-bottom: 10px;
}
.sel-carousel__item {
  background-color: #fcfcfc;
  padding-bottom: 20px;
}

.top_card .el-card img {
  width: 40%;
}
.top_card .el-card__body {
  padding: 5px;
}
.top_card .el-card {
  text-align: center;
  --el-card-bg-color: none;
  margin-left: 20px;
  margin-right: 20px;
  width: 120px;
  height: 180px;
}
.top_card .el-row {
  flex-wrap: inherit;
}

.el-card {
  margin-bottom: 10px;
  margin-right: 8px;
  margin-left: 8px;
  padding: 5px;
  padding-top: 8px;
}
.el-card img {
  width: 40%;
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
