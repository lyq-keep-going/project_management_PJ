// components/add_new_tag/add_new_tag.js
const app = getApp();
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        tags:{
            type:Array,
            value:[]
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        default_tag:''
    },

    /**
     * 组件的方法列表
     */
    methods: {
        handleHide(e){
            this.triggerEvent("hideScreen",{},{bubbles:true});
        },

        handleDefault(e){
            this.setData({
                default_tag: e.detail.value
            })
        },

        addTag(e){
            wx.request({
                method:'POST',
                url: 'https://bbs.fitymistudio.cn/api/lms/tag',
                header:{
                    "Authorization" : app.globalData.userInfo.tokenHead + app.globalData.userInfo.token
                },
                data:{
                    lessonId: this.data.lessonId,
                    tagName: this.data.default_tag,
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
