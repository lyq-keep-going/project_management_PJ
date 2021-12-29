<template>
  <div>
    <h1>课程详情</h1>

    <div class="top" :style="{ boxShadow: 'base' }">
      <div class="img_right" style="display: flex">
        <img id="courseimg" />
        <div class="img_right2">
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
      </div>
    </div>

    <el-container>
      <el-container>
        <el-aside width="600px" class="left"
          ><h2>讨论区</h2>
          <div class="discuss">
            <el-collapse v-model="activeName" accordion>
              <el-collapse-item
                id="post0"
                v-for="i in 4"
                :title="this.list_discuss[i - 1].title"
                :key="i"
                :v-model="test"
              >
                <div>
                  <span>楼主：</span>
                  <span v-if="this.list_discuss[i - 1].user"> {{ this.list_discuss[i - 1].user.username }} </span
                  >&nbsp;&nbsp;&nbsp;&nbsp;<span
                    style="color: rgb(222, 222, 255)"
                    >{{ this.list_discuss[i - 1].issueTime }}</span
                  >
                </div>
                <div>{{ this.list_discuss[i - 1].content }}</div>
                <div><el-button @click="answer">回复</el-button></div>

                <!--子-->
                <div
                  v-for="j in this.list_discuss[i - 1].children.length"
                  :key="j"
                >
                  <el-divider>
                    <el-icon><star-filled /></el-icon>
                  </el-divider>
                  <p>{{ this.list_discuss[i - 1].children[j - 1].title }}</p>
                  <p>
                    <span v-if="this.list_discuss[i - 1].children[j - 1].user">
                      {{
                        this.list_discuss[i - 1].children[j - 1].user.username
                      }}  </span
                    >&nbsp;&nbsp;&nbsp;&nbsp;<span
                      style="color: rgb(222, 222, 255)"
                      >{{
                        this.list_discuss[i - 1].children[j - 1].issueTime
                      }}</span
                    >
                  </p>
                  <!--   <span>回复{{this.list_discuss[i-1].children[j-1].parentUser.user}}</span>-->
                  <p>{{ this.list_discuss[i - 1].children[j - 1].content }}</p>

                  <!--    <el-button
                    class="answer"
                    @click="showTxtWindow"
                    v-if="!showTxt"
                    >回复</el-button
                  >
                  <el-form
                    ref="form"
                    :model="form"
                    label-width="120px"
                    v-if="showTxt"
                  >
                    <el-form-item label="title">
                      <el-input v-model="form.title"></el-input>
                    </el-form-item>
                    <el-form-item label="content">
                      <el-input
                        v-model="form.content"
                        type="textarea"
                      ></el-input>
                    </el-form-item>
                    <el-form-item>
                      <el-button type="primary" @click="answer">提交</el-button>
                    </el-form-item>
                  </el-form>
                  -->
                </div>
              </el-collapse-item>
            </el-collapse>
          </div>
          <div class="tag">
            <el-tag
              v-for="tag in dynamicTags"
              :key="tag"
              closable
              :disable-transitions="false"
              @close="handleClose(tag)"
            >
              {{ tag }}
            </el-tag>
            <el-input
              v-if="inputVisible"
              ref="saveTagInput"
              v-model="inputValue"
              class="input-new-tag"
              size="mini"
              @keyup.enter="handleInputConfirm"
              @blur="handleInputConfirm"
            >
            </el-input>
            <el-button
              v-else
              class="button-new-tag"
              size="small"
              @click="showInput"
              >+ New Tag</el-button
            >
          </div>

          <div>
            <el-button class="answer" @click="showTxtWindow" v-if="!showTxt"
              >发布帖子</el-button
            >
            <el-form
              ref="form"
              :model="form"
              label-width="120px"
              v-if="showTxt"
            >
              <el-form-item label="标题：">
                <el-input v-model="form.title"></el-input>
              </el-form-item>
              <el-form-item label="内容：">
                <el-input v-model="form.content" type="textarea"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="answer">提交</el-button>
              </el-form-item>
            </el-form>
          </div>
        </el-aside>

        <el-main class="right"
          ><h2>交易区</h2>
          <el-container>
            <el-main class="right" id="main_top">
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
                              <span style="color: rgb(13, 22, 255)"
                                >售价：</span
                              >
                              <span>{{ obj.price }}</span>
                            </p>
                          </div>
                        </el-card>
                      </el-col>
                    </el-row>
                    <div class="top_bottom">
                      <el-button type="text" class="button" @click="jumpBook()"
                        >查看更多</el-button
                      >
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
                              <span style="color: rgb(13, 22, 255)"
                                >售价：</span
                              >
                              <span>{{ obj.price }}</span>
                            </p>
                          </div>
                        </el-card>
                      </el-col>
                    </el-row>
                    <div class="top_bottom">
                      <el-button type="text" class="button" @click="jumpPPT()"
                        >查看更多</el-button
                      >
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
                              <span style="color: rgb(13, 22, 255)"
                                >售价：</span
                              >
                              <span>{{ obj.price }}</span>
                            </p>
                          </div>
                        </el-card>
                      </el-col>
                    </el-row>
                    <div class="top_bottom">
                      <el-button type="text" class="button" @click="jumpNote()"
                        >查看更多</el-button
                      >
                    </div>
                  </div>
                </el-carousel-item>
              </el-carousel>
            </el-main>
          </el-container>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>


<script>
import axios from "axios";

export default {
  data() {
    return {
      test: [0, 1, 2, 3],
      lessonId: "",
      courseDetail: "",
      dynamicTags: ["课程", "商品", "资料", "兴趣"],
      inputVisible: false,
      inputValue: "",
      showTxt: false,
      form: {
        content: "",
        title: "",
      },

      list_right: "",

      list_title: [{ title: "二手书" }, { title: "PPT" }, { title: "笔记" }],
      list_left: "",
      list_book: "",
      list_ppt: "",
      list_note: "",

      list_discuss: [
        {
          title: "",
          user: { username: "" },
          content: "",
          issueTime: "",
          children: {
            title: "",
            content: "",
            user: { username: "" },
            issueTime: "",
          },
        },
        {
          title: "",
          user: { username: "" },
          content: "",
          issueTime: "",
          children: {
            title: "",
            content: "",
            user: { username: "" },
            issueTime: "",
          },
        },
        {
          title: "",
          user: { username: "" },
          content: "",
          issueTime: "",
          children: {
            title: "",
            content: "",
            user: { username: "" },
            issueTime: "",
          },
        },
        {
          title: "",
          user: { username: "" },
          content: "",
          issueTime: "",
          children: {
            title: "",
            content: "",
            user: { username: "" },
            issueTime: "",
          },
        },
      ],
    };
  },
  methods: {
    showTxtWindow() {
  
      this.showTxt = !this.showTxt;
    },
    answer() {
      console.log( this.form.content);
      var url = "/api/ums/topic";
      var data={"title":this.form.title,"content":this.form.content};
      axios({
        method: "post",
        url: url,
        data: data,
        headers: {
          Authorization: "BearerJhbG",
        },
      })
        .then((response) => {
          // this.list_discuss = response.data.data.list;

         this.$message.success("发布成功！");

          showTxtWindow();
        })
        .catch((error) => console.log(error));
    },

    loadDetail(_id) {
      var url = "/api/lms/info";

      axios({
        method: "get",
        url: url,
        params: {
          lessonId: _id,
        },
        headers: {
          Authorization: "BearerJhbG",
        },
      })
        .then((response) => {
          this.courseDetail = response.data.data;
          document.getElementById("courseimg").src = this.courseDetail.pictures;
          //console.log(response.data.data);
        })
        .catch((error) => console.log(error));
    },

    handleClose(tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
    },

    showInput() {
      this.inputVisible = true;
      this.$nextTick((_) => {
        this.$refs.saveTagInput.$refs.input.focus();
      });
    },

    handleInputConfirm() {
      const inputValue = this.inputValue;
      if (inputValue) {
        this.dynamicTags.push(inputValue);
      }
      this.inputVisible = false;
      this.inputValue = "";
    },

    loadDiscuss() {
      var url = "/api/ums/topicList";
      axios({
        method: "get",
        url: url,
        params: {
          pageNum: 1,
          pageSize: 4,
          lessonId: this.lessonId,
        },
        headers: {
          Authorization: "BearerJhbG",
        },
      })
        .then((response) => {
          this.list_discuss = response.data.data.list;

          //          console.log(this.lessonId);

          console.log(response.data.data.list);
          //console.log(response.data.data.list[0].title);
        })
        .catch((error) => console.log(error));
    },

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
          //console.log(this.list_book);
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
        })
        .catch((error) => console.log(error));
    },
  },

  mounted() {
    this.lessonId = this.$route.params.id;

    this.loadDetail(this.lessonId);

    this.getTop();

    this.loadDiscuss();
  },
};
</script>

<style >
.img_right2 {
  width: 60%;
  height: 100%;
  padding: 25px;
}
.img_right2 p {
  padding: 5px;
}
#courseimg {
  width: 30%;
  height: 20%;
  margin-right: 50px;
}
.top {
  padding: 20px;
  margin: 10px;
  display: block;
  background-color: #ffffff;

  height: 60%;
  border: 1px solid var(--el-border-color-base);
  border-radius: 1px;
  margin-top: 20px;

  box-shadow: 0 1px 6px #ccc;
}

.left {
  font: "PingFang SC";

  width: 35%;
  padding: 20px;
  margin: 10px;
  background-color: #f7f2e0;
  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 100px;

  border: 1px dashed var(--el-border-color-base);
  border-radius: 30px;
  box-shadow: 0 1px 6px rgb(253, 246, 235);
}

.right {
  background-color: #ffffff;
  color: var(--el-text-color-primary);
  text-align: center;
  display: left;
  line-height: 100px;

  border: 1px dashed var(--el-border-color-base);
  border-radius: 30px;
  margin-top: 20px;
}

.el-carousel__item {
  background-color: #f1f1f1;
}

.el-collapse-item__header {
  padding-left: 10px;
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
</style>