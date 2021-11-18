<template>
    <el-tabs type="card" @tab-click="handleClick" tab-position="left">
        <el-tab-pane label="收藏课程" id="FavoriteClass">收藏课程</el-tab-pane>
        <el-tab-pane label="我的出售" id="Selling"></el-tab-pane>
        <el-tab-pane label="我的帖子" id="Post"></el-tab-pane>
        <el-tab-pane label="收藏物品" id="FavoriteGoods"></el-tab-pane>
        <el-tab-pane label="我的消息" id="Message"></el-tab-pane>
        <el-tab-pane label="我的团购" id="GroupPurchase">我的团购</el-tab-pane>
    </el-tabs>
</template>
<script lang="ts">
export default {
    data() {
        return {
            activeName: 'first',
        }
    },
    methods: {
        handleClick(tab, event) {
            console.log(tab, event)
        },
    },
}
</script>