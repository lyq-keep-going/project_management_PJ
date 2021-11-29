// components/commodity/commodity.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        single_commodity:{
            type:Object,
            value:{}
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        translation_dict:{
            seller:"卖家",
            bookname:"书名",
            author:"作者",
            publisher:"出版社",
            new_degree:"成色",
            price:"价格"
        }
    },  

    /**
     * 组件的方法列表
     */
    methods: {

    }
})
