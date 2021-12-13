<template>
    <div class="content">
        <el-form :inline="true">
            <el-form-item label="是否出售">
                <div>
                    <el-radio v-model="isSold" :label="true">已出售</el-radio>
                    <el-radio v-model="isSold" :label="false">未出售</el-radio>
                </div>
            </el-form-item>
            <el-form-item label="物品种类">
                <el-select v-model="value" placeholder="全部" default="全部">
                    <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                    ></el-option>
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">确认</el-button>
            </el-form-item>
        </el-form>

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
            isSold: false,
            isMine: true,
            value: 0,
            options: [
                { value: 0, label: '全部', },
                { value: 1, label: 'ppt', },
                { value: 2, label: 'book', },
                { value: 3, label: 'notes', }],
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
            let url = `/api/cms/commodities?pageNum=${pageNum}&pageSize=${pageSize}&type=${this.type}&isMine=${this.isMine}&isSold=${this.isSold}`;

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
            this.getMySale(nextPage, this.pageSize)
        },
        onSubmit() {
            this.getMySale(this.pageNum, this.pageSize)
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