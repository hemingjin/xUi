<template>
    <div class="x-tooltip" 
         @mouseenter="show = true" @mouseleave="show =false">
        <div class="x-tooltip-inner">
            <slot></slot> 
        </div>
        <transition name="fade">
            <div class="x-tooltip-text" ref="tooltipText" :class="classList" v-show="show">
                {{content}}
            </div>
        </transition>
    </div>
</template>
<script>
export default {
    name: 'xTooltip',
    props: {
        // 文字提示内容
        content: {
            type: [String, Object, Number, Array],
            default: '默认文字提示'
        },
        // 文字提示展示的位置
        position: {
            type: String,
            default: 'bottom',
            validator: function(value) {
                return ['top', 'top-left', 'top-right','bottom', 'bottom-left', 'bottom-right', 'left', 'left-top', 'left-bottom', 'right', 'right-top', 'right-bottom'].includes(value);
            }
        }
    },
    data() {
        return {
            // 默认不显示文字提示
            show: false
        }
    },
    computed: {
        classList() {
            return [`x-tooltip_${this.position}`]
        }
    },
    mounted() {
        console.log(this.$refs.tooltipText.offsetHeight)
    }
}
</script>
