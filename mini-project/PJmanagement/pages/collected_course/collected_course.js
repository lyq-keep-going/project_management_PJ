// pages/collected_course/collected_course.js
const app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        items: [
            {
                img:"https://z3.ax1x.com/2021/11/29/oMDSij.jpg",
                title: "喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵"
            },{
                img:"https://z3.ax1x.com/2021/11/29/oMDSij.jpg",
                title: "喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵"
            },{
                img:"https://z3.ax1x.com/2021/11/29/oMDSij.jpg",
                title: "喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵"
            },
        ]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        var that = this
        wx.request({
            url: "https://" + app.globalData.host  + "/api/ums/myFavor/lesson",
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
                    items: res.data.data.list
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