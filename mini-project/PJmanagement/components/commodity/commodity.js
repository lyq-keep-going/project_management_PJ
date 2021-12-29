// components/commodity/commodity.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        single_commodity:{
            type:Object,
            value:{}
        },
        index:{
            type:Number
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        translation_dict:{
            name:"书名",
            author:"作者",
            publisher:"出版社",
            newDegree:"成色",
            price:"价格",
            coverPercentage:"笔记完整程度",
            singlePrintChinese: "是否单面打印",
            paperSize: "纸张大小",
            chapters:"所含章节"
        }
    },  

    /**
     * 组件的方法列表
     */
    methods: {
        enterCommodity(e){
            var json_single_commodity = JSON.stringify(this.data.single_commodity);
            wx.navigateTo({
              url: '../../pages/commodity_detail/commodity_detail?single_commodity=' + json_single_commodity,
            });
        }
    }
})
