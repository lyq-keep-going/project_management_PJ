// components/post_reply/post_reply.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        reply_info:{
            type:Object,
            value:{}
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        children: [{
            content: "况必两整定南已部按号结外传定色以。验果存军写消类和养知大山领九须也。",
            id: 245,
            issueTime: "2015-03-18 14:42:10",
            parentId: "245",
            state: 0,
            title: "求究世直斗不根",
            user:{
                avatar: "http://dummyimage.com/80x80/d879f2",
                id: 16932,
                username: "黄霞"    
            }
        },{
            content: "况必两整定南已部按号结外传定色以。验果存军写消类和养知大山领九须也。",
            id: 246,
            issueTime: "2015-03-18 14:42:10",
            parentId: "245",
            state: 0,
            title: "求究世直斗不根",
            user:{
                avatar: "http://dummyimage.com/80x80/d879f2",
                id: 16932,
                username: "黄霞"    
            }
        }] 
    },

    /**
     * 组件的方法列表
     */
    methods: {
       handleReply(e){
           console.log(e)
           this.triggerEvent('replyButtonClicked', e.currentTarget.dataset.user,{bubbles:true});
       } 
    }
})
