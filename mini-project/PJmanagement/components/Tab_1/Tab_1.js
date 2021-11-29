// components/Tab_1/Tab_1.js
Component({
    // options: {
    //     styleIsolation: 'apply-shared' 
    // },
    /**
     * 组件的属性列表
     */
    properties: {

    },

    /**
     * 组件的初始数据
     */
    data: {
        active_item: 0
    },

    /**
     * 组件的方法列表
     */
    methods: {
        handle_chose(e){
            this.setData({
                active_item: e.currentTarget.dataset.operation
            })
        }
    }

})
