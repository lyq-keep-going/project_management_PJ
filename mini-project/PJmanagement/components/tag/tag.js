// components/tag/tag.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        tagname:{
            type:String,
            value:"标签"
        },
        thumb_up_num:{
            type:Number,
            value:0
        },
        thumb_down_num:{
            type:Number,
            value:0
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        isHidden:true,
        thumb_up_fill:false,
        thumb_down_fill:false
    },

    /**
     * 组件的方法列表
     */
    methods: {
        handle_tap(e){
            this.setData({
                isHidden:false
            })
        },
        handle_thumb_up_tap(e){
            this.setData({
                thumb_up_fill:!this.data.thumb_up_fill
            })
        },
        handle_thumb_down_tap(e){
            this.setData({
                thumb_down_fill:!this.data.thumb_down_fill
            })
        },
        handle_close(){
            this.setData({
                isHidden:true
            })
        }
    }
})
