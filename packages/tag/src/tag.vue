<template>
    <div class="x-tag"
        :class="[
            type ? `x-tag-${type}` : '',
            size ? `x-tag-${size}` : ''
        ]"
        @click="handleClick">
        <span><slot></slot></span>
        <i class="x-icon icon-close" v-if="closeable" @click.stop="handleClose"></i>
    </div>
</template>
<script>
export default {
    name: 'xTag',
    props: {
        // 标签类型
        type: {
            type: String,
            default: '',
            validator: function(value) {
                return value ? ['danger', 'warning', 'success'].includes(value) : true
            }
        },
        // 标签大小
        size: {
            type: String,
            default: '',
            validator: function(value) {
                return value ? ['small', 'mini'].includes(value) : true
            }
        },
        // 是否颗删除/关闭
        closeable: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        // 点击事件
        handleClick() {
            console.log('click')
            this.$emit('click');
        },
        // 关闭事件
        handleClose() {
            console.log('close')
            if(this.closeable) {
                this.$emit('close');
            }
        }
    }
}
</script>
