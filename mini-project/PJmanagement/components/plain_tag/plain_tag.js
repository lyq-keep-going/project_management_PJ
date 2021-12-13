// components/plain_tag/plain_tag.js
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
        lessonId:{
            type:Number,
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
        handle_tap(e){
            wx.request({
                method:'POST',
                url: 'https://bbs.fitymistudio.cn/api/lms/tag',
                header:{
                    "Authorization" : app.globalData.userInfo.tokenHead + app.globalData.userInfo.token
                },
                data:{
                    lessonId: this.data.lessonId,
                    tagName: this.data.tagname,
                    isPositive: true
                },
                success:(result)=>{
                    wx.showToast({
                      title: '标签添加成功',
                      icon:'success'
                    })
                }
            });
        }

    }
})
