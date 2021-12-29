// pages/post_detail/post_detail.js
const app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        hasComments: false,
        topicId: 0,
        main_topic:{},
        reply:[],
        isReplying:false,
        curr_replying_id:0,
        reply_data:''
    },

    send_reply(e){
        wx.request({ 
            url: 'https://' + app.globalData.host +'/api/ums/topic',
            header:{
                "Authorization" : app.globalData.userInfo.tokenHead + app.globalData.userInfo.token
            },
            method:'POST',
            data:{
                topicId:this.data.curr_replying_id,
                content:this.data.reply_data
            },
            success:(result)=>{
                console.log(result);
            }
        });
    },

    getReply(e){
        console.log(e)
        this.setData({
            reply_data: e.detail.value
        })
    },

    closeReplyWindow(e){
        this.setData({
            isReplying: false
        });
    },


    onReplyClicked(e){
        this.setData({
            isReplying: true,
            curr_replying_id: e.detail
        });
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.setData({
            topicId: options.topicId
        });
        wx.request({ 
            url: 'https://' + app.globalData.host +'/api/ums/topicList?topicId=' + this.data.topicId,
            header:{
                "Authorization" : app.globalData.userInfo.tokenHead + app.globalData.userInfo.token
            },
            success:(result)=>{
                console.log(result);
                this.setData({
                    main_topic:result.data.data.list[0],
                    reply: result.data.data.list.slice(1)
                })
            }
        });
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