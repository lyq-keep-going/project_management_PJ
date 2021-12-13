// pages/front_page/front_page.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        inputValue: "",
        search_img: "https://z3.ax1x.com/2021/11/29/oMUzm4.png",
        font_img: "https://z3.ax1x.com/2021/11/29/oMDSij.jpg",
        items: [
            {
                img:"https://z3.ax1x.com/2021/11/29/oMDSij.jpg",
                title: "喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵",
                price:"58"
            },{
                img:"https://z3.ax1x.com/2021/11/29/oMDSij.jpg",
                title: "喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵",
                price:"58"
            },{
                img:"https://z3.ax1x.com/2021/11/29/oMDSij.jpg",
                title: "喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵",
                price:"58"
            },
        ]

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        var that = this
        wx.request({
            url: "https://bbs.fitymistudio.cn/api/lms/lessonList?pageNum=1&pageSize=3&filter=hot",
            method: 'GET',
            data: {
            },
            header: {
                'content-type': 'application/json', // 默认值
                'Authorization': 'Bearec9M[ln9s$^6NlDP*I3bd5*OZB9gKSgHP.SzNET*Ypuw64bhxZ]91zWkX@52AXmMiK'
            },
            success: function(res) {
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

    toSearch: function () {
        wx.navigateTo({
          url: '/pages/search/search',
        })
    }
})