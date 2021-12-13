// pages/discussion/discussion.js
const app  = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        tags:[],
        candidate_tags:[],
        entryList:[],
        hide_add_tag : true,  
        curr_page: 1,
        last_page:1000,
        lessonId:6,//假的，要改的
        lessonInfo:{
            id:6,
            collected: true,
            pictures: [
                "https://url.cy/X3pCA3"
            ],
            lessonName: "项目管理",
            lessonNumber: "SOFTXXXX",
            teacherName: "高晓桐",
            semester: "秋季",
            credit: 5
        }
    },

    enterPost(e){
        wx.navigateTo({
          url: '../post_detail/post_detail?topicId=' + e.target.dataset.topicid,
        })
        console.log(e.target.dataset);
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
    
    addPost(e){
        wx.navigateTo({
          url: '../add_post/add_post?lessonId='+ this.data.lessonId,
        })
    },

    sendPostRequest(pageNum, size, lessonId){
        wx.request({ 
            url: 'https://bbs.fitymistudio.cn/api/ums/topicList?lessonId='+ lessonId + '&pageNum=' + pageNum + '&pageSize=' + size,
            header:{
                "Authorization" : app.globalData.userInfo.tokenHead + app.globalData.userInfo.token
            },
            success:(result)=>{
                console.log(result)
                this.setData({
                    entryList: result.data.data.list,
                    last_page: result.data.data.totalPage
                })
            }
          });
    },

    getHotestTags(pageNum, pageSize, lessonId){
        wx.request({ 
            url: 'https://bbs.fitymistudio.cn/api/lms/tagList?pageNum='+ pageNum + '&pageSize=' + pageSize + '&lessonId=' + lessonId,
            header:{
                "Authorization" : app.globalData.userInfo.tokenHead + app.globalData.userInfo.token
            },
            success:(result)=>{
                this.setData({
                    tags: result.data.data.list
                })
            }
          });
    },

    getMoreTags(pageNum, pageSize, lessonId){
        wx.request({ 
            url: 'https://bbs.fitymistudio.cn/api/lms/tagList?pageNum='+ pageNum + '&pageSize=' + pageSize + '&lessonId=' + lessonId,
            header:{
                "Authorization" : app.globalData.userInfo.tokenHead + app.globalData.userInfo.token
            },
            success:(result)=>{
                this.setData({
                    candidate_tags: result.data.data.list
                })
            }
        });
    },

    onPreviousPage(e){
        if(this.data.curr_page == 1){
            wx.showToast({
                title: '已经是第一页了',
                icon: 'none'
            })
        }
        var that = this;
        this.setData({
            curr_page: that.data.curr_page - 1
        })
        this.sendPostRequest(this.data.curr_page, 5);
    },

    onNextPage(e){
        if(this.data.curr_page == this.data.last_page){
            wx.showToast({
                title: '已经是最后一页了', //弹框内容
                icon: 'none',  //弹框模式
                duration: 2000    //弹框显示时间
            })
        }
        var that = this;
        this.setData({
            curr_page: that.data.curr_page + 1
        })
        this.sendPostRequest(this.data.curr_page, 5);
    },

    hideScreenHandler(e){
        this.setData({
            hide_add_tag: true
        })
    },

    openAddTagHandler(e){ 
        this.setData({ 
            hide_add_tag: false
        });
        this.getMoreTags(1, 20, this.data.lessonId);
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.getLessonInfo();
        this.sendPostRequest(1, 5);
        this.getHotestTags(1, 10, this.data.lessonId);
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
});

