// pages/my_message/my_message.js
const app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        messages : [
            {
                person: "喵喵",
                content: "喵喵喵喵喵喵喵喵喵喵喵喵么么么么么",
                date: "22:20"
            }, {
                person: "喵喵",
                content: "喵喵喵喵喵喵喵喵喵喵喵喵么么么么么",
                date: "22:20"
            }, {
                person: "喵喵",
                content: "喵喵喵喵喵喵喵喵喵喵喵喵么么么么么",
                date: "22:20"
            }
        ]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        var that = this
        wx.request({
            url: "https://" + app.globalData.host +"/api/mms/msgList",
            method: 'GET',
            data: {
            },
            header: {
                'content-type': 'application/json', // 默认值
                'Authorization': wx.getStorageSync('token')
            },
            success: function(res) {
                console.log(res.data.data.list)
                that.setData({
                    messages: res.data.data.list
                })
            }
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

    },

    toChat: function (event) {
        wx.navigateTo({
          url: '/pages/chat/chat?id=' + event.currentTarget.dataset.id,
        })
    }
})