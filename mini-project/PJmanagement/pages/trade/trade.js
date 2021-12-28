// pages/trade/trade.js
const app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        commodity_list:[],
        collected:true,
        curr_active: 2,
        lessonId: 0,
        lessonInfo:{}
    },

    handleCollect(e){
        if(this.data.lessonInfo.collected){
            wx.request({ 
                url: 'https://' + app.globalData.host + '/api/lms/favorite',
                method:'DELETE',
                header:{
                    "Authorization" : app.globalData.userInfo.tokenHead + app.globalData.userInfo.token,
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                data:{
                    id: this.data.lessonId
                },
                success:(result)=>{
                    console.log(result);
                    var collected = 'lessonInfo.collected';
                    this.setData({
                        [collected]: false
                    })
                    wx.showToast({
                      title: '取消收藏成功',
                    })
                }
            });
        }else{
            wx.request({ 
                url: 'https://' + app.globalData.host + '/api/lms/favorite',
                method:'GET',
                header:{
                    "Authorization" : app.globalData.userInfo.tokenHead + app.globalData.userInfo.token,
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                data:{
                    id: this.data.lessonId
                },
                success:(result)=>{
                    console.log(result);
                    var collected = 'lessonInfo.collected';
                    this.setData({
                        [collected]: true
                    });
                    wx.showToast({
                      title: '收藏成功',
                    })
                }
            });
        }
    },

    uploadCommodity(e){
        wx.navigateTo({
          url: '../uploadCommodity/uploadCommodity?curr_active=' + this.data.curr_active + '&lessonId=' + this.data.lessonId 
        })
    },

    getCommodityInfo(type, lessonId){
        wx.request({ 
            url: 'https://' + app.globalData.host + '/api/cms/commodities?type=' + type + '&isMine=false&isSold=false&lessonId=' + lessonId,
            header:{
                "Authorization" : app.globalData.userInfo.tokenHead + app.globalData.userInfo.token
            },
            success:(result)=>{
                console.log(result);
                this.setData({
                    commodity_list:result.data.data.list
                })
            }
        });
    },

    getLessonInfo(){
        wx.request({ 
            url: 'https://' + app.globalData.host + '/api/lms/info?lessonId=' + this.data.lessonId,
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

    goToBook(e){
        this.setData({
            curr_active: 2
        });
        this.getCommodityInfo(2, this.data.lessonId);
    }, 

    goToPPT(e){
        this.setData({
            curr_active: 1
        });
        this.getCommodityInfo(1, this.data.lessonId);
    },

    goToNote(e){
        this.setData({
            curr_active: 3
        });
        this.getCommodityInfo(3, this.data.lessonId);
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.setData({
            lessonId: options.lessonId
        })
        this.getLessonInfo();
        this.getCommodityInfo(2, this.data.lessonId)
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