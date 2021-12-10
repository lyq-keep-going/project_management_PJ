<template>
    <div class="content">
        <el-row :gutter="20">
            <el-col :span="6" v-for="num in 10">
                <Goods />
            </el-col>
        </el-row>
    </div>
</template>
<script>
import Goods from "../../components/Goods.vue";

export default {
    data() {
        return {}
    },
    components: {
        Goods
    },
    methods: {

    },
}
</script>

<style>
.content {
    width: 90%;
    margin: auto;
}
</style>