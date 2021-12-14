// pages/chat/chat.js
const app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        userId: ''
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.setData({
            userId: options.id
        })
        var that = this
        wx.request({
            url: 'https://' + app.globalData.host + '/api/mms/msgList',
            method: 'GET',
            data: {
                userId: options.id
            },
            header: {
                'content-type': 'application/json', // 默认值
                'Authorization': 'Bearec9M[ln9s$^6NlDP*I3bd5*OZB9gKSgHP.SzNET*Ypuw64bhxZ]91zWkX@52AXmMiK'
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

    }
})