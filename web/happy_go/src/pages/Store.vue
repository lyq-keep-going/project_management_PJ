<template>
  <el-main>
    <h1>商城</h1>
    <router-view></router-view>
    <div class="result">
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
                <span></span><span>  &laquo; {{ obj.name }} &raquo;</span>
              </p>
              <p>
                {{ obj.lessonNumber }}
              </p>
              <span>{{ obj.semester }}</span>
              <p>
                <span style="color: rgb(117, 117, 117)">价格：</span
                ><span>{{ obj.price}}</span>
              </p>
              <div class="bottom">
                <el-button
                  type="text"
                  class="button"
                  @click="seeDetail(obj.id)"
                  >查看详情</el-button
                >
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>

    <div class="demo-pagination-block">
      <el-pagination
        v-model:currentPage="currentPage"
        :page-size="page_size"
        layout="prev, pager, next, jumper"
        :total="page_total"
        @click="search(this.key, currentPage)"
        @current-change="handleCurrentChange"
      >
      </el-pagination>
    </div>
  </el-main>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import axios from "axios";

export default {
  currPage: "",
  data() {
    return {
      type:"",
      key: " ",
      list: "",
      page_size: 8,
      page_total: 200,
    };
  },
  setup() {
    const handleCurrentChange = (val) => {
      // console.log(val);
      //  this.cur=val;
      //this.search(this.key, val);
    };

    return {
      currentPage: ref(1),

      handleCurrentChange,
    };
  },

  methods: {
    test(_num) {
      alert(_num);
    },
    update(_type,_pageNum) {
      var url="/api/cms/"+_type;
     
      axios({
        method: "get",
        url: url,
        params: {
          pageNum: _pageNum,
          pageSize: 8,
        },
        headers: {
          Authorization: "BearerJhbG",
        },
      })
        .then((response) => {
          this.list = "";
          this.list = response.data.data.list;
          this.page_total = response.data.data.total;
          console.log(this.page_total);
        })
        .catch((error) => console.log(error));
    },
    
    seeDetail(_id) {
      this.$router.push({
        name: "GoodsDetail",
        params: {
          id: _id,
          type:this.type,
        },
      });
    },
  },

  mounted() {
    this.type=this.$route.params.type;
    this.update(this.$route.params.type,1);
  },
};
</script>

<style lang="scss" scoped>
.card {
  margin-bottom: 20px;
}
.demo-pagination-block + .demo-pagination-block {
  margin-top: 10px;
}
.el-card img {
  margin-top: 10px;
  width: 40%;
}
</style>
