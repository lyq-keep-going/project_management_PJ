// pages/discussion/discussion.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        tagnames:["可可爱爱","啦啦", "好耶"],
        entryList:[{
            content:"标题",
            date:"0000-00-00"
        },{
            content:"标题",
            date:"0000-00-00"
        },{
            content:"标题",
            date:"0000-00-00"
        }],
        hide_add_tag : true
    },

    hideScreenHandler(e){
        this.setData({
            hide_add_tag: true
        })
    },

    openAddTagHandler(e){
        this.setData({
            hide_add_tag: false
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

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