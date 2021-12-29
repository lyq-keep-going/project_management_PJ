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
        
    }
    ,

    /**
     * 组件的方法列表
     */
    methods: {
       handleReply(e){
           console.log(e)
           this.triggerEvent('replyButtonClicked', e.currentTarget.dataset.id,{bubbles:true});
       } 
    }
})
