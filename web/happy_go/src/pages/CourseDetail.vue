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
                <div>      <span>楼主：</span>
                  <span> {{ this.list_discuss[i - 1].user.username }} </span
                  >&nbsp;&nbsp;&nbsp;&nbsp;<span
                    style="color: rgb(222, 222, 255)"
                    >{{ this.list_discuss[i - 1].issueTime }}</span
                  >
                </div>
                <div>{{ this.list_discuss[i - 1].content }}</div>

                <div
                  v-for="j in this.list_discuss[i - 1].children.length"
                  :key="j"
                >
                  <el-divider>
                    <el-icon><star-filled /></el-icon>
                  </el-divider>
                  <p>{{ this.list_discuss[i - 1].children[j - 1].title }}</p>
                  <p>
                    <span>
                      {{
                        this.list_discuss[i - 1].children[j - 1].user.username
                      }} </span
                    >&nbsp;&nbsp;&nbsp;&nbsp;<span
                      style="color: rgb(222, 222, 255)"
                      >{{
                        this.list_discuss[i - 1].children[j - 1].issueTime
                      }}</span
                    >
                  </p>
                  <p>{{ this.list_discuss[i - 1].children[j - 1].content }}</p>
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
        </el-aside>

        <el-main class="right"
          ><h2>交易区</h2>
          <el-carousel :interval="4000" type="card" height="200px">
            <el-carousel-item v-for="obj in list_left" :key="obj">
              <h3 class="medium">{{ obj.title }}</h3>
            </el-carousel-item>
          </el-carousel>
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
      //children_num:[0,0,0,0],
      test: [0, 1, 2, 3],
      id: "",
      courseDetail: "",
      dynamicTags: ["课程", "商品", "资料", "兴趣"],
      inputVisible: false,
      inputValue: "",

      list_right: "",

      list_left: [{ title: "二手书" }, { title: "PPT" }, { title: "笔记" }],
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
    teste(_v) {
      alert(_v);
    },
    loadDetail(_id) {
      var url = "/api/lms/info";

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
        },
        headers: {
          Authorization: "BearerJhbG",
        },
      })
        .then((response) => {
          this.list_discuss = response.data.data.list;

          //

          //  console.log(this.list_discuss[0].id);
        })
        .catch((error) => console.log(error));
    },
  },

  mounted() {
    this.loadDiscuss();
    //console.log("mounted!");
    this.id = 29;
    // if (this.$route.params.id != null) this.id = this.$route.params.id;
    this.loadDetail(this.id);
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

  width: 60%;
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
</style>