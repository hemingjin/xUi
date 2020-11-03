export const baseMixin = {
    data() {
        return {
            apiColumns: [
                {name: '参数', key: 'prop', width: 160},
                {name: '说明', key: 'description', width: 460},
                {name: '类型', key: 'type', width: 160},
                {name: '可选值', key: 'options'},
                {name: '默认值', key: 'default', width: 160}
            ]
        }
    },
    computed: { 
        // 根据路由获取页面标题
        pageTitle() {
            return this.$router.currentRoute.name;
        }
    },
    components: {
        
    }
}