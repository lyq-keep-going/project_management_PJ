<template>
    <el-tabs @tab-click="handleClick" tab-position="left">
        <el-tab-pane label="个人信息" id="Information">
            <Information />
        </el-tab-pane>
        <el-tab-pane label="我的帖子" id="MyPost">
            <MyPost />
        </el-tab-pane>
        <el-tab-pane label="我的出售" id="MySale">
            <MySale />
        </el-tab-pane>
        <el-tab-pane label="我的消息" id="MyMessage">
            <MyMessage />
        </el-tab-pane>

        <el-tab-pane label="收藏课程" id="FavoriteCourse">
            <FavoriteCourse />
        </el-tab-pane>
        <el-tab-pane label="收藏物品" id="FavoriteGoods">
            <FavoriteGoods />
        </el-tab-pane>
        <!-- <el-tab-pane label="我的团购" id="GroupPurchase">
            <GroupPurchase />
        </el-tab-pane>-->
    </el-tabs>
</template>

<script lang="ts">
import Information from "./personal/Information.vue"

import FavoriteCourse from "./personal/FavoriteCourse.vue"
import FavoriteGoods from "./personal/FavoriteGoods.vue"
// import GroupPurchase from "./personal/GroupPurchase.vue"

import MySale from "./personal/MySale.vue"
import MyPost from "./personal/MyPost.vue"
import MyMessage from "./personal/MyMessage.vue"

export default {
    data() {
        return {
            activeName: 'first',
        }
    },
    components: {
        Information,
        FavoriteCourse,
        FavoriteGoods,
        // GroupPurchase,
        MySale,
        MyPost,
        MyMessage,
    },
    methods: {
        handleClick(tab, event) {
            window.scroll(0, 0)
        },
    },
}
</script>

<style>
.el-tabs__header {
    display: block;
    position: fixed;
    left: 0;
    top: 60px;
    bottom: 0;
}
.el-tabs__content {
    margin-left: 100px;
}
</style>