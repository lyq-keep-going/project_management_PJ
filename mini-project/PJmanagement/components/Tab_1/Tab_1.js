// components/Tab_1/Tab_1.js
Component({
    // options: {
    //     styleIsolation: 'apply-shared' 
    // },
    /**
     * 组件的属性列表
     */
    properties: {
        active_item: {
            type: Number,
            value:0
        },
        lessonId:{
            type: Number,
            value:0
        }
    },

    /**
     * 组件的初始数据
     */
    data: {

    },

    /**
     * 组件的方法列表
     */
    methods: {
        goToTrade(e){
            if(this.properties.active_item == 0){
                wx.navigateTo({
                  url: '../../pages/trade/trade?lessonId=' + this.properties.lessonId ,
                })
            }
        },

        goToDiscussion(e){
            if(this.properties.active_item == 1){
                wx.navigateTo({
                  url: '../../pages/discussion/discussion?lessonId=' + this.properties.lessonId ,
                })
            }
        }
    }

})
