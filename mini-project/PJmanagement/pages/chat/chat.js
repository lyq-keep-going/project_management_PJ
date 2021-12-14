// pages/chat/chat.js
const app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        userId: '',
        myId: wx.getStorageSync('userId'),
        inputValue: "",
        toView: ''
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.setData({
            userId: options.id
        })
        console.log(options.id)
        var that = this
        setInterval(function (){
            wx.request({
                url: "https://" + app.globalData.host  + "/api/mms/msgList",
                method: 'GET',
                data: {
                    userId: options.id
                },
                header: {
                    'content-type': 'application/json', // 默认值
                    'Authorization': wx.getStorageSync('token')
                },
                success: function(res) {
                    // console.log(res.data.data.list)
                    that.setData({
                        items: res.data.data.list,
                        toView: 'msg-' + (res.data.data.list.length -1)
                    })
                }
            })
        },1000)
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

    deliver: function (e) {
        var that = this
        if(this.data.inputValue!=""){
            wx.request({
                url: 'https://bbs.fitymistudio.cn/api/mms/msg',
                method: 'POST',
                data: {
                    receiverId: that.data.userId,
                    content: that.data.inputValue
                },
                header: {
                    'content-type': 'application/json', // 默认值
                    'Authorization': wx.getStorageSync('token')
                },
                success: function(res) {
                    that.setData({
                        inputValue: ""
                    })
                    console.log(res)
                    that.onLoad
                }
            })
        }
    },

    inputText: function(e) {
        this.setData({         
            inputValue: e.detail.value,
        })
    }


    // pageScrollToBottom: function() {
    //     let query = wx.createSelectorQuery().in(this)
    //     // 通过节点获取位置信息
    //     query.select('#chat_container').boundingClientRect()
    //     query.selectViewport().scrollOffset()
    //     query.exec(res => {
    //       console.log(res[0])
    //       setTimeout(() => {
    //         wx.pageScrollTo({
    //           scrollTop: res[0].height + 100,
    //           duration: 200
    //         })
    //       }, 200)
    //     })

    // }

})