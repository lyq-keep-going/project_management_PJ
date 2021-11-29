// components/add_new_tag/add_new_tag.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {

    },

    /**
     * 组件的初始数据
     */
    data: {

    },

    /**
     * 组件的方法列表
     */
    methods: {
        handleHide(e){
            this.triggerEvent("hideScreen",{},{bubbles:true});
        }
    }
})
