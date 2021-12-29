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
        lessonInfo:{},
        bookPageNum: 1,
        pptPageNum:1,
        notePageNum:1
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

    getCommodityInfo(type, lessonId, pageNum, pageSize){
        wx.request({ 
            url: 'https://' + app.globalData.host + '/api/cms/commodities?type=' + type + '&isMine=false&isSold=false&lessonId=' + lessonId + '&pageNum=' + pageNum + '&pageSize=' + pageSize,
            header:{
                "Authorization" : app.globalData.userInfo.tokenHead + app.globalData.userInfo.token
            },
            success:(result)=>{
                console.log(result);
                this.setData({
                    commodity_list:this.data.commodity_list.concat(result.data.data.list)
                })
                console.log(result.data.data.list)
                console.log(this.data.commodity_list)
            }
        });
    },

    changeCommodityInfo(type, lessonId, pageNum, pageSize){
        wx.request({ 
            url: 'https://' + app.globalData.host + '/api/cms/commodities?type=' + type + '&isMine=false&isSold=false&lessonId=' + lessonId + '&pageNum=' + pageNum + '&pageSize=' + pageSize,
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
        this.changeCommodityInfo(2, this.data.lessonId, this.data.bookPageNum, 8);
    }, 

    goToPPT(e){
        this.setData({
            curr_active: 1
        });
        this.changeCommodityInfo(1, this.data.lessonId, this.data.pptPageNum, 8);
    },

    goToNote(e){
        this.setData({
            curr_active: 3
        });
        this.changeCommodityInfo(3, this.data.lessonId, this.data.notePageNum, 8);
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.setData({
            lessonId: options.lessonId
        })
        this.getLessonInfo();
        this.getCommodityInfo(2, this.data.lessonId, this.data.bookPageNum,8);
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
        if(curr_active == 2){
            this.data.bookPageNum++;
            this.getCommodityInfo(2, this.data.lessonId, this.data.bookPageNum, 8);
        }else if(curr_active == 1){
            this.data.pptPageNum++;
            this.getCommodityInfo(1, this.data.lessonId, this.data.pptPageNum, 8);
        }else if(curr_active == 3){
            this.data.notePageNum++;
            this.getCommodityInfo(3, this.data.lessonId, this.data.notePageNum, 8);
        }
        
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