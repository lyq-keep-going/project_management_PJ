// pages/commodity_detail/commodity_detail.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        commodity_pic:[
            'https://z3.ax1x.com/2021/11/26/oVEkK1.jpg',
            'https://z3.ax1x.com/2021/11/26/oVKuwR.jpg',
            'https://z3.ax1x.com/2021/11/26/oVKKT1.jpg'
        ],
        info:{},
        translate_dic:{
            name:"书名",
            author:"作者",
            publisher:"出版社",
            newDegree:"成色",
            price:"价格",
            coverPercentage:"笔记完整程度",
            singlePrint: "是否单面打印",
            paperSize: "纸张大小",
            content:"描述",
            chapters:"章节"
        }
    },
    
    goToChat(e){
        wx.navigateTo({
          url: '../chat/chat',
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.setData({
            info: JSON.parse(options.single_commodity) 
        })
        console.log(this.data.info)
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