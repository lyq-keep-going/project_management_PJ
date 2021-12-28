// pages/uploadCommodity/uploadCommodity.js
const app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        curr_active: 1,
        lessonId: 0,
        book_info:{
            id: null,
            name:'',
            author:'',
            publisher:'',
            newDegree:'',
            price:0,
            content:''
        },
        notes_info:{
            id: null,
            coverPercentage:'',
            price:0,
            content:''
        },
        ppt_info:{
            id: null,
            chapters:'',
            paperSize:'',
            singlePrint:true,
            newDegree:'',
            content:'',
            price:0
        },
        tempFilePath: ''

    },

    pptChapters(e){
        var chapters = 'ppt_info.chapters';
        this.setData({
            [chapters]: e.detail.value
        })
    },

    pptPaperSize(e){
        var paperSize = 'ppt_info.paperSize';
        this.setData({
            [paperSize]: e.detail.value
        })
    },

    pptSinglePrint(e){
        var singlePrint = 'ppt_info.singlePrint';
        if(e.detail.value != '是' && e.detail.value != '否'){
            wx.showToast({
              title: '请在是否单面打印一栏输入是/否',
              icon:'none'
            })
            return;
        }
        if(e.detail.value == '是'){
            this.setData({
                [singlePrint]:true
            })
        }else{
            this.setData({
                [singlePrint]:false
            })
        }
        
    },

    pptNewDegree(e){
        var newDegree = 'ppt_info.newDegree';
        this.setData({
            [newDegree]: e.detail.value
        })
    },

    pptContent(e){
        var content = 'ppt_info.content';
        this.setData({
            [content]: e.detail.value
        })
    },

    pptPrice(e){
        var price = 'ppt_info.price';
        this.setData({
            [price]: e.detail.value
        })
    },

    upPptInfo(e){
        wx.request({
            url: 'https://' + app.globalData.host + '/api/oss/policy',
            header:{
                "Authorization" : app.globalData.userInfo.tokenHead + app.globalData.userInfo.token
            },
            success:(res)=>{
                console.log(res);
                var signature = res.data.data;
                var filename = this.data.tempFilePath.substring(this.data.tempFilePath.lastIndexOf('/') + 1);
                console.log(filename);
                wx.uploadFile({ 
                    filePath: this.data.tempFilePath,
                    name: 'file',
                    url: 'https://doughit.oss-cn-shanghai.aliyuncs.com',
                    header:{
                        "Authorization" : app.globalData.userInfo.tokenHead + app.globalData.userInfo.token,
                        "Content-Type": "multipart/form-data"
                    },
                    formData:{
                        ossaccessKeyId:signature.accessKeyId,
                        policy:signature.policy,
                        signature: signature.signature,
                        dir:signature.dir,
                        host:signature.host,
                        callback:signature.callback,
                        key:signature.dir +'/'+ filename
                    },
                    success:(res)=>{
                        console.log(res)
                        wx.request({ 
                            url: 'https://' + app.globalData.host + '/api/cms/ppt',
                            method:'POST',
                            header:{
                                "Authorization" : app.globalData.userInfo.tokenHead + app.globalData.userInfo.token
                            },
                            data:{
                                'filename':res.data.finename,
                                'lessonId': this.data.lessonId,
                                'chapters':this.data.ppt_info.chapters,
                                'paperSize':this.data.ppt_info.paperSize,
                                'singlePrint': this.data.ppt_info.singlePrint,
                                'newDegree': this.data.ppt_info.newDegree,
                                'price': this.data.ppt_info.price,
                                'content': this.data.ppt_info.content
                            },
                            success:(res)=>{
                                console.log(res);
                                if(res.data.code == 200){
                                    wx.showToast({
                                    title: '上传成功',
                                    })
                                }else{
                                    wx.showToast({
                                        title: '上传失败',
                                        icon:'error'
                                    })
                                }
                            }
                        });
                        
                    },
                    fail:(res)=>{
                        console.log(res)
                    }
                });
            }
        })


    },

    notesCoverPercentage(e){
        var coverPercentage = 'notes_info.coverPercentage'
        this.setData({
            [coverPercentage]: e.detail.value
        })
    },

    notesContent(e){
        var content = 'notes_info.content';
        this.setData({
            [content]: e.detail.value
        })
    },

    notesPrice(e){
        var price = 'notes_info.price';
        this.setData({
            [price]: e.detail.value
        })
    },

    upNotesInfo(e){
        wx.request({
            url: 'https://' + app.globalData.host + '/api/oss/policy',
            header:{
                "Authorization" : app.globalData.userInfo.tokenHead + app.globalData.userInfo.token
            },
            success:(res)=>{
                console.log(res);
                var signature = res.data.data;
                var filename = this.data.tempFilePath.substring(this.data.tempFilePath.lastIndexOf('/') + 1);
                console.log(filename);
                wx.uploadFile({ 
                    filePath: this.data.tempFilePath,
                    name: 'file',
                    url: 'https://doughit.oss-cn-shanghai.aliyuncs.com',
                    header:{
                        "Authorization" : app.globalData.userInfo.tokenHead + app.globalData.userInfo.token,
                        "Content-Type": "multipart/form-data"
                    },
                    formData:{
                        ossaccessKeyId:signature.accessKeyId,
                        policy:signature.policy,
                        signature: signature.signature,
                        dir:signature.dir,
                        host:signature.host,
                        callback:signature.callback,
                        key:signature.dir +'/'+ filename
                    },
                    success:(res)=>{
                        console.log(res)
                        wx.request({ 
                            url: 'https://' + app.globalData.host + '/api/cms/note',
                            method:'POST',
                            header:{
                                "Authorization" : app.globalData.userInfo.tokenHead + app.globalData.userInfo.token
                            },
                            data:{
                                'filename':res.data.finename,
                                'lessonId': this.data.lessonId,
                                'coverPercentage': this.data.notes_info.coverPercentage,
                                'price': this.data.book_info.price,
                                'content': this.data.book_info.content
                            },
                            success:(res)=>{
                                console.log(res);
                                if(res.data.code == 200){
                                    wx.showToast({
                                    title: '上传成功',
                                    })
                                }else{
                                    wx.showToast({
                                        title: '上传失败',
                                        icon:'error'
                                    })
                                }
                            }
                        });
                        
                    },
                    fail:(res)=>{
                        console.log(res)
                    }
                });
            }
        });
    },


    upBookInfo(e){
        wx.request({
            url: 'https://' + app.globalData.host + '/api/oss/policy',
            header:{
                "Authorization" : app.globalData.userInfo.tokenHead + app.globalData.userInfo.token
            },
            success:(res)=>{
                console.log(res);
                var signature = res.data.data;
                var filename = this.data.tempFilePath.substring(this.data.tempFilePath.lastIndexOf('/') + 1);
                console.log(filename);
                wx.uploadFile({ 
                    filePath: this.data.tempFilePath,
                    name: 'file',
                    url: 'https://doughit.oss-cn-shanghai.aliyuncs.com',
                    header:{
                        "Authorization" : app.globalData.userInfo.tokenHead + app.globalData.userInfo.token,
                        "Content-Type": "multipart/form-data"
                    },
                    formData:{
                        ossaccessKeyId:signature.accessKeyId,
                        policy:signature.policy,
                        signature: signature.signature,
                        dir:signature.dir,
                        host:signature.host,
                        callback:signature.callback,
                        key:signature.dir +'/'+ filename
                    },
                    success:(res)=>{
                        console.log(res)
                        wx.request({ 
                            url: 'https://' + app.globalData.host + '/api/cms/book',
                            method:'POST',
                            header:{
                                "Authorization" : app.globalData.userInfo.tokenHead + app.globalData.userInfo.token
                            },
                            data:{
                                'filename':res.data.finename,
                                'lessonId': this.data.lessonId,
                                'name': this.data.book_info.name,
                                'author': this.data.book_info.author,
                                'publisher': this.data.book_info.publisher,
                                'newDegree': this.data.book_info.newDegree,
                                'price': this.data.book_info.price,
                                'content': this.data.book_info.content
                            },
                            success:(res)=>{
                                console.log(res);
                                if(res.data.code == 200){
                                    wx.showToast({
                                    title: '上传成功',
                                    })
                                }else{
                                    wx.showToast({
                                        title: '上传失败',
                                        icon:'error'
                                    })
                                }
                            }
                        });
                        
                    },
                    fail:(res)=>{
                        console.log(res)
                    }
                });
            }
        });
    },

    bookBindName(e){
        var bookname = 'book_info.name';
        this.setData({
            [bookname]: e.detail.value
        });
    },

    bookBindAuthor(e){
        var author = 'book_info.author';
        this.setData({
            [author]: e.detail.value
        });
    },

    bookBindPublisher(e){
        var publisher = 'book_info.publisher';
        this.setData({
            [publisher]:e.detail.value
        });
    },

    bookBindNewDegree(e){
        var newDegree = 'book_info.newDegree';
        this.setData({
            [newDegree]: e.detail.value
        })
    },

    bookBindContent(e){
        var content = 'book_info.content';
        this.setData({
            [content]: e.detail.value
        })
    },

    bookBindPrice(e){
        var price = 'book_info.price';
        this.setData({
            [price]: e.detail.value
        })
    },

    uploadBookInfo(e){
        wx.uploadFile({
          filePath: this.data,
          name: 'name',
          url: 'url',
        })
    },

    uploadPicture(e){
        //先选图片,
        wx.chooseImage({
            count: 1, // 默认9
            sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
            sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
            success:(res) =>{
              // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
              console.log(res)
              this.setData({
                  tempFilePath: res.tempFilePaths[0]
              })
            }
        });
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.setData({
            curr_active: options.curr_active,
            lessonId: options.lessonId
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

    }
})