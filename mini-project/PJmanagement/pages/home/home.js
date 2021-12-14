// pages/home/home.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        userInfo_noLoign : {
            avatar: "https://z3.ax1x.com/2021/11/29/oMmKx0.png",
            nickname: "前往登录"
        },
        userInfo: '',
        icon : {
            course: "https://z3.ax1x.com/2021/11/29/oMKci4.png",
            sell: "https://z3.ax1x.com/2021/11/29/oMM861.png",
            post: "https://z3.ax1x.com/2021/11/29/oMMt0K.png",
            goods:"https://z3.ax1x.com/2021/11/29/oMMD1A.png",
            message: "https://z3.ax1x.com/2021/11/29/oMMRAS.png",

        }
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.setData({
            userInfo: wx.getStorageSync('userInfo')
            
        })
        console.log(this.userInfo)
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

    logout: function() {
        wx.setStorageSync('userInfo', '')
        wx.setStorageSync('openId', '')
        wx.setStorageSync('token', '')
        app.globalData.userInfo.tokenHead = ''
        app.globalData.userInfo.token = ''
        wx.navigateTo({
          url: '/pages/login/login',
        })
    } 
})