<template>
    <div class="x-option" @click.stop="handleOptionClick">
        {{label}}
    </div>
</template>
<script>
export default {
    name: 'xOption',
    inject: ['select'],
    props: {
        label: String,
        value: [String, Number]
    },
    methods: {
        // 监听选项点击事件
        handleOptionClick() {
            // var parent = this.$parent || this.$root;
            // var name = parent.$options.componentName;
            // console.log(parent, name) 
            // while (parent && (!name || name !== 'XSelect')) {
            //     parent = parent.$parent;

            //     if (parent) {
            //         name = parent.$options.componentName;
            //     }
            // }
            // if (parent) {
                
            // }
            this.select.currentValue = this.value
        }
    }
}
</script>
