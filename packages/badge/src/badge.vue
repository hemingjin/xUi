<template>
    <div class="x-badge">
        <i class="x-badge-item"  
            ref="badge"
            :class="[
                type && isDot ? `x-badge-item_${type}` : `x-badge-item_${type} x-badge-item_count`,
            ]"
            :style="{'right': -badgeWidth / 2 + 'px'}"
            v-if="!custom"
            > 
            <!-- 不是小红点样式， 显示数字 -->
            {{showCount && !isDot ? showCount : ''}}
        </i>
        <i class="x-badge-item"  
            ref="badge"
            :class="[
                'x-badge-item_custom',
                type ? `x-badge-item_${type}` : '',
            ]"
            :style="{'right': -badgeWidth / 2 + 'px'}"
            v-else
            > 
            {{custom}}
        </i>
        <slot></slot>
    </div>
</template>
<script>
export default {
    // 标记组件
    name: 'xBadge',
    props: { 
        // 自定义内容
        custom: [String, Number],
        // 显示数值
        count: Number,
        // 最大值, 超过最大值显示 99+
        max: {
            type: Number,
            default: 99
        },
        // 是否是小红点类型
        isDot : {
            type: Boolean,
            default: false 
        },
        // 标记颜色类型
        type: {
            type: String,
            default: 'danger',
            validator: function(value) {
                return ['primary', 'warning', 'danger', 'success'].includes(value);
            }
        }
    },
    data() {
        return {
            badgeWidth: 0
        }
    },
    computed: {
        // 数值显示计算， 大于设置的最大显示值时
        showCount() {
            let count = parseInt(this.count);
            let max = parseInt(this.max);
            return count && count < max ? count : max + '+'
        },  
    },
    mounted() { 
        // 计算标记的宽度，以此设置right偏移量
        this.badgeWidth = this.$refs.badge && this.$refs.badge.offsetWidth;
    }
}
</script>

