<template>
    <transition name="fade">
        <div class="x-alert" :class="[type ? `x-alert-${type}`: '', isBorder? `x-alert-border` : '']" v-if="isShow">
            <div class="x-alert-type"> 
                <i class="x-icon icon-prompt_fill" v-if="type=='warning'"></i>
                <i class="x-icon icon-success_fill" v-if="type=='success'"></i>
                <i class="x-icon icon-delete_fill" v-if="type=='error'"></i> 
            </div>
            <div class="x-alert-wrap">
                <div class="x-alert-title" v-if="title">{{title}}</div>
                <div class="x-alert-content">{{content}}</div>
            </div>
            <div class="x-alert-event" v-if="isCloseable" @click="isShow = false">
                <i class="x-icon icon-close" v-if="!closeText"></i>
                <span v-else>{{closeText}}</span>
            </div>
        </div> 
    </transition>
</template>
<script>
export default {
    name: 'xAlert',
    props: {
        // 类型
        type: {
            type: String,
            default: 'warning',
            validator: function(value) {
                return value ? ['success', 'warning', 'error'].includes(value) : ''
            }
        },
        // 标题
        title: String,
        // 内容
        content: String,
        // 是否可关闭
        isCloseable: {
            type: Boolean,
            default: false
        },
        // 自定义关闭文字: 
        closeText: String,
        // 是否具有边框
        isBorder: {
            type: Boolean,
            default: false
        },
    },
    data() {
        return {
            isShow: true
        }
    }
}
</script>

