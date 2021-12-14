<template>
  <div>
    {{ id }}
    <h1>课程详情</h1>

    <div class="top" :style="{ boxShadow: 'base' }">
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

    <el-container>
      <el-container>
        <el-aside width="300px" class="left"
          ><h2>讨论区</h2>
          <div class="discuss">
            <el-collapse v-model="activeName" accordion>
              <el-collapse-item title="Consistency" name="1">
                <div>a</div>
              </el-collapse-item>
              <el-collapse-item title="Feedback" name="2">
                <div>b</div>
              </el-collapse-item>
              <el-collapse-item title="Efficiency" name="3">
                <div>c</div>
              </el-collapse-item>
              <el-collapse-item title="Controllability" name="4">
                <div>d</div>
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
      id: "",
      courseDetail: "",
      dynamicTags: ["Tag 1", "Tag 2", "Tag 3"],
      inputVisible: false,
      inputValue: "",

      list_right: "",

      list_left: [{ title: "二手书" }, { title: "PPT" }, { title: "笔记" }],
    };
  },
  methods: {
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
          console.log(response.data.data);
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
  },

  mounted() {
    if (this.$route.params.id != null) this.id = this.$route.params.id;
    this.loadDetail(this.id);
  },
};
</script>

<style >
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

  width: 30%;
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
</style>