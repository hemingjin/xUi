<template>
    <div class="x-timeline-item"
        :class="[
            highlight ? 'active': '',
            color ? `x-timeline-item_${color}`: ''
        ]"
        :style="{'padding-bottom': spacing + 'px'}">
        
        <div class="x-timeline-item_icon" v-if="icon">
            <i class="x-icon" :class="`icon-${icon}`"></i>
        </div>
        <!-- <div class="x-timeline-item_time" v-if="time">
            {{$utils.getFormatDate(time)}}
        </div> -->
        <div class="x-timeline-item_head" v-if="!icon && !time"></div>
        <div class="x-timeline-item_line" :style="{top: icon ? '12px': '10px'}"></div>
        <div class="x-timeline-item_content">
            <slot></slot> 
        </div>
    </div>
</template>
<script>
export default {
    name: 'xTimelineItem',
    props: {
        // 是否高亮当前项
        highlight: {
            type: Boolean,
            default: false
        },
        // 项的颜色类型
        color: {
            type: String,
            default: 'primary',
            validator: function(value) {
                return ['primary', 'success', 'error', 'warning'].includes(value)
            }
        },
        // 显示自定义图标
        icon: String,
        // 显示时间, toFixed
        time: String
    },
    computed: {
        spacing() { 
            return this.$parent.$props.spacing ? this.$parent.$props.spacing : 20
        }, 
    }
}
</script>


