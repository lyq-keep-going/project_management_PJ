// pages/search/search.js
const app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        inputValue: "",
        search_img: "https://z3.ax1x.com/2021/11/29/oMUzm4.png",
        font_img: "https://z3.ax1x.com/2021/11/29/oMDSij.jpg",
        filter: " ",
        items: [

        ],
        array: ['水课', '干货满满', '老师nice', '有小组作业'],
        index: -1,
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        var that = this
        wx.request({
            url: "https://" + app.globalData.host +"/api/lms/lessonList?filter=hot",
            method: 'GET',
            data: {
            },
            header: {
                'content-type': 'application/json', // 默认值
                'Authorization': wx.getStorageSync('token')
            },
            success: function(res) {
                console.log(res.data)
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

    },

    bindPickerChange: function (e) {
        console.log('picker发送选择改变，携带值为', e.detail.value)
        this.setData({
          index: e.detail.value
        })
        this.onLoad();
    },

    search: function (e) {
        this.setData({
            inputValue: e.detail.value,
            filter: "query"
        })
        var that = this
        wx.request({
            url: "https://" + app.globalData.host +"/api/lms/lessonList",
            method: 'GET',
            data: {
                filter: that.data.filter,
                keys: that.data.inputValue
            },
            header: {
                'content-type': 'application/json', // 默认值
                'Authorization': wx.getStorageSync('token')
            },
            success: function(res) {
                console.log(res.data)
                that.setData({
                    items: res.data.data.list
                })
            }
        })
    }

})