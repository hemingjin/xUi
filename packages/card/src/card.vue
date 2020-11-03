<template>
    <div class="x-card" :style="{'width': width + 'px'}">
        <div class="x-card-header" v-if="$slots.header">
            <slot name="header">
            </slot>
        </div>
        <div class="x-card-content">
            <slot>
                <!-- 卡片内容插槽 -->
            </slot>
        </div>
    </div>
</template>
<script>
export default {
    // 卡片组件
    name: 'xCard',
    props: {
        // 设置卡片宽度
        width: [String, Number]
    }
}
</script>

