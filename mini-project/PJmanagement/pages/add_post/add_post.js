// pages/add_post/add_post.js
const app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        title:'',
        content:'',
        lessonId:''
    },

    inputTitle(e){
        this.setData({
            title: e.detail.value,
        })
    },

    inputContent(e){
        this.setData({
            content:e.detail.value
        })
    },

    post(e){
        if(this.data.title.length == 0){
            wx.showToast({
              title: '标题内容不能为空',
              icon: 'none'
            });
            return;
        }
        wx.request({ 
            method:'POST',
            url: 'https://' + app.globalData.host +'/api/ums/topic',
            header:{
                "Authorization" : app.globalData.userInfo.tokenHead + app.globalData.userInfo.token
            },
            data:{
                lessonId: this.data.lessonId,
                title: this.data.title,
                content: this.data.content
            },
            success:(result)=>{
                wx.showToast({
                  title: '帖子上传成功',
                  icon:'success',
                  success:()=>{
                    wx.navigateTo({
                        url: '../discussion/discussion?lessonId='+ this.data.lessonId,
                    })
                  }
                })
                
            }
        });
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.setData({
            lessonId: options.lessonId
        })
    }, 

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})