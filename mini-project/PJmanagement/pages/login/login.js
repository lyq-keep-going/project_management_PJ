// pages/login/login.js
const app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {

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

    },
     
    login: function() {
        wx.getUserProfile({
            desc: '展示用户昵称。头像等基本信息', 
            success: (file) => {
                wx.login({
                    success: res => {
                        // 发送 res.code 到后台换取 openId, sessionKey, unionId
                        console.log(res)
                        if (res.code) {
                            //发起网络请求
                            wx.request({
                                url: "https://" + app.globalData.host + "/api/ums/login",
                                method: 'POST',
                                data: {
                                    miniCode: res.code, //将code发给后台拿token
                                },
                                header: {
                                    'content-type': 'application/json' // 默认值
                                },
                                success: function(res) {
                                    // 存token
                                    console.log(res.data);
                                    //console.log('token=' + res.data.data.token)
                                    //console.log(res.data.data.openId)
                                    wx.setStorageSync('userInfo', file.userInfo)
                                    var token = res.data.data.tokenHead + res.data.data.token;
                                    wx.setStorageSync('token', token)
                                    app.globalData.userInfo.tokenHead = res.data.data.tokenHead
                                    app.globalData.userInfo.token = res.data.data.token
                                    wx.request({
                                      url: 'https://' + app.globalData.host + '/api/ums/info',
                                      method: 'GET',
                                      data: {
                                      },
                                      header: {
                                          'content-type': 'application/json', // 默认值
                                          'Authorization': wx.getStorageSync('token')
                                      },
                                      success: function(res) {
                                          console.log(res.data.data)
                                          wx.setStorageSync('userId', res.data.data.id)
                                          wx.setStorageSync('openId',res.data.data.openId )
                                          if(res.data.data.username==null){
                                            wx.request({
                                                url: 'https://' + app.globalData.host +'/api/ums/info',
                                                method: 'PUT',
                                                data: {
                                                    userId: wx.getStorageSync('userId'),
                                                    username: wx.getStorageSync('userInfo').nickName,
                                                    avatar: wx.getStorageSync('userInfo').avatarUrl
                                                },
                                                header: {
                                                    'content-type': 'application/json', // 默认值
                                                    'Authorization': wx.getStorageSync('token')
                                                },
                                                success: function(res) {
                                                    console.log(res)
                                                }
                                            })
                                          }
                                      }
                                    })
                                    wx.switchTab({
                                        url: '/pages/home/home',
                                        success(){
                                            let page = getCurrentPages().pop();
                                            if (!page) return;
                                            page.onLoad();
                                        }
                                    })
                                }
                            })
                        } else {
                            console.log('获取用户登录态失败！' + res.errMsg)
                        }

                    }
        
                })
            }
        })
    }
})