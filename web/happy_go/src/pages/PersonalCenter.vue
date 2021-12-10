<template>
    <el-tabs type="card" @tab-click="handleClick" tab-position="left">
        <el-tab-pane label="个人信息" id="Information">
            <Information />
        </el-tab-pane>
        <el-tab-pane label="我的帖子" id="Post">
            <Post />
        </el-tab-pane>
        <el-tab-pane label="我的出售" id="Selling">
            <Selling />
        </el-tab-pane>
        <el-tab-pane label="我的消息" id="Message">
            <Message />
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

import Selling from "./personal/Selling.vue"
import Post from "./personal/Post.vue"
import Message from "./personal/Message.vue"

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
        Selling,
        Post,
        Message,
    },
    methods: {
        handleClick(tab, event) {
            // console.log(tab, event)
        },
    },
}
</script>