<template>
    <div class="content">
        <el-row :gutter="20">
            <el-col :span="12" v-for="item in list">
                <Goods :info="item" />
            </el-col>
        </el-row>
        <div class="pagination" v-if="list.length != 0">
            <el-pagination
                :page-size="pageSize"
                layout="prev, pager, next"
                :currentPage="pageNum"
                :total="total"
                @current-change="handlePageClick"
                background
            ></el-pagination>
        </div>

        <el-empty description="还没有内容" v-if="list.length == 0"></el-empty>
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
        getMyFavoriteGoods(pageNum, pageSize) {
            let url = `api/cms/favorite?pageNum=${pageNum}&pageSize=${pageSize}`;

            this.axios
                .get(url)
                .then((response) => {
                    let res = response.data.data
                    // console.log(res);

                    this.list = res.list
                    this.total = res.total
                    this.totalPage = parseInt(res.totalPage)
                    this.pageNum = parseInt(res.pageNum)
                })
                .catch((error) => console.log(error));
        },
        handlePageClick(nextPage) {
            this.getMyFavoriteGoods(nextPage, this.pageSize)
        },
    },
    mounted() {
        this.getMyFavoriteGoods(this.pageNum, this.pageSize)
    },
}
</script>

<style scoped>
.content {
    width: 90%;
    margin: auto;
}

.pagination {
    margin: 20px;
}
</style>