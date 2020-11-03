<template>
    <div class="x-progress text-padding"  >
        <div class="x-progress-inner"
            :class="[size ? `x-progress-${size}` : '']" >
            <span class="x-progress-bar" 
                :class="[
                    type ? `x-progress-bar-${type}` : '',
                    animate ? `x-progress-bar-animate`: '']" 
                :style="{'width': percentWidth + '%', 'background-color': color}"></span>
        
        </div>
        <div class="percent-text" v-if="showText && percentWidth < 100 && type !== 'error'"> 
            {{percentWidth + '%'}}
        </div> 
        <div class="percent-text" v-else>
            <i class="x-icon icon-right progress-complete" v-if="percentWidth == 100 && type !== 'error'"></i>
            <i class="x-icon icon-close progress-error" v-if="type == 'error'"></i>
        </div>
    </div>
</template>
<script>
export default {
    name: 'xProgress',
    props: {
        // 进度条进度数值, == 100时 会显示完成图标
        percent: {
            type: Number,
            default: 10,
            validator: function(value) {
                return value > 0 && value <= 100
            }
        },
        // 进度条粗细样式
        size: {
            type: String,
            default: '',
            validator: function(value) {
                return value ? ['thin', 'large'].includes(value) : true;
            }
        },
        // 进度条颜色样式
        type: {
            type: String,
            default: '',
            validator: function(value) {
                // error 样式 会显示错误图标
                return value ? ['success', 'warning', 'danger', 'error'].includes(value) : true;
            }
        },
        // 自定义进度条颜色, color 会覆盖掉 type 的样式
        color: String,
        // 是否显示进度数字
        showText: {
            type: Boolean,
            default: true
        },
        // 是否带有动画
        animate: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        percentWidth() {
            return this.percent > 0 && this.percent <= 100 ? this.percent / 100 * 100 : 100;
        }
    }
}
</script>
