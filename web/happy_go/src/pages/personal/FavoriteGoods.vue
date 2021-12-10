<template>
    <div class="content">
        <el-row :gutter="20">
            <el-col :span="6" v-for="item in list">
                <Goods :info="item" />
            </el-col>
        </el-row>
    </div>
</template>
<script>
import Goods from "../../components/Goods.vue";

export default {
    data() {
        return {
            list: [
                {
                    id: 540691,
                    picture: "obj",
                    bookName: "《 导现办建 》",
                    author: "李芳",
                    publisher: "世政气就年与政",
                    newDegree: "半新",
                    price: 22,
                    unit: "¥",
                    content: "市质第。",
                    seller: {
                        id: 61090,
                        username: "黎霞",
                        avatar: "http://dummyimage.com/80x80/#FF6600'"
                    },
                    lesson: {
                        id: 982,
                        lessonName: "又最管"
                    }
                },
                {
                    id: 66333,
                    picture: "obj",
                    bookName: "《 流争高多 》",
                    author: "吕刚",
                    publisher: "再史程则",
                    newDegree: "半新",
                    price: 37,
                    unit: "¥",
                    content: "速住点。",
                    seller: {
                        id: 40217,
                        username: "潘磊",
                        avatar: "http://dummyimage.com/80x80/#FF6600'"
                    },
                    lesson: {
                        id: 98,
                        lessonName: "如众果了向"
                    }
                }
            ]
        }
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