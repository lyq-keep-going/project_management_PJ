// pages/trade/trade.js
const app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        commodity_list:[
            {
                id:0,
                seller:"ahaah",
                picture:"https://z3.ax1x.com/2021/11/26/oVEkK1.jpg",
                bookname:"《西游记》",
                author:"施耐庵",
                publisher:"商务印刷馆",
                new_degree:"全新",
                price:58
            } ,
            {
                id:1,
                seller:"ahaah",
                picture:"https://z3.ax1x.com/2021/11/26/oVEkK1.jpg",
                bookname:"《西游记》",
                author:"施耐庵",
                publisher:"商务印刷馆",
                new_degree:"全新",
                price:58
            } ,
            {
                id:2,
                seller:"ahaah",
                picture:"https://z3.ax1x.com/2021/11/26/oVEkK1.jpg",
                bookname:"《西游记》",
                author:"施耐庵",
                publisher:"商务印刷馆",
                new_degree:"全新",
                price:58
            } ,
            {
                id:3,
                seller:"ahaah",
                picture:"https://z3.ax1x.com/2021/11/26/oVEkK1.jpg",
                bookname:"《西游记》",
                author:"施耐庵",
                publisher:"商务印刷馆",
                new_degree:"全新",
                price:58
            } 
        ],
        collected:true
    },

    getLessonInfo(){
        wx.request({ 
            url: 'https://bbs.fitymistudio.cn/api/lms/info?id=' + this.data.lessonId,
            header:{
                "Authorization" : app.globalData.userInfo.tokenHead + app.globalData.userInfo.token
            },
            success:(result)=>{
                console.log(result);
                this.setData({
                    lessonInfo: result.data.data
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
        this.getLessonInfo();
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