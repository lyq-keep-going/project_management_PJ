// components/tag/tag.js
const app = getApp();
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
        },
        thumb_up_fill:{
            type: Boolean,
            value:false
        },
        thumb_down_fill:{
            type: Boolean,
            value: false
        },
        lessonId:{
            type:Number
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        isHidden:true
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
            wx.request({ 
                url: 'https://' + app.globalData.host + '/api/lms/tag',
                method:'POST',
                header:{
                    "Authorization" : app.globalData.userInfo.tokenHead + app.globalData.userInfo.token
                },
                data:{
                    lessonId: this.properties.lessonId,
                    tagName: this.properties.tagname,
                    isPositive: true
                },
                success:(result)=>{
                    console.log(result);
                    if(this.properties.thumb_up_fill){
                        this.setData({
                            thumb_up_fill:false,
                            thumb_up_num: this.properties.thumb_up_num - 1
                        });
                    }else{
                        this.setData({
                            thumb_up_fill:true,
                            thumb_up_num: this.properties.thumb_up_num + 1
                        });
                    }
                }
            });
        },
        handle_thumb_down_tap(e){
            wx.request({ 
                url: 'https://' + app.globalData.host + '/api/lms/tag',
                method:'POST',
                header:{
                    "Authorization" : app.globalData.userInfo.tokenHead + app.globalData.userInfo.token
                },
                data:{
                    lessonId: this.properties.lessonId,
                    tagName: this.properties.tagname,
                    isPositive: false
                },
                success:(result)=>{
                    console.log(result);
                    if(this.properties.thumb_down_fill){
                        this.setData({
                            thumb_down_fill:false,
                            thumb_down_num: this.properties.thumb_down_num - 1
                        });
                    }else{
                        this.setData({
                            thumb_down_fill:true,
                            thumb_down_num: this.properties.thumb_down_num + 1
                        });
                    }
                }
            });
            
        },
        handle_close(){
            this.setData({
                isHidden:true
            })
        }
    }
})
