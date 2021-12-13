<template>
    <div class="content">
        <el-row :gutter="20">
            <el-col :span="6" v-for="item in list">
                <Goods :info="item" />
            </el-col>
        </el-row>
        <br />
        <div>
            <el-pagination
                :page-size="pageSize"
                layout="prev, pager, next"
                :currentPage="pageNum"
                :total="total"
                @current-change="handlePageClick"
                background
            ></el-pagination>
        </div>
    </div>
</template>
<script>
import Goods from "../../components/Goods.vue";

export default {
    data() {
        return {
            pageNum: 1,
            pageSize: 8,
            totalPage: 5,
            total: 35,
            list: []
        }
    },
    components: {
        Goods
    },
    methods: {
        getMySale(pageNum, pageSize) {
            let url = `/api/cms/commodities?pageNum=${pageNum}&pageSize=${pageSize}`;

            this.axios
                .get(url)
                .then((response) => {
                    let res = response.data.data
                    console.log(res);

                    this.list = res.list
                    this.total = res.total
                    this.totalPage = parseInt(res.totalPage)
                    this.pageNum = parseInt(res.pageNum)
                })
                .catch((error) => console.log(error));
        },
        handlePageClick(nextPage) {
            this.getMySale(nextPage, this.pageSize)
        }
    },
    mounted() {
        this.getMySale(this.pageNum, this.pageSize)
    },
}
</script>

<style>
.content {
    width: 90%;
    margin: auto;
}
</style>