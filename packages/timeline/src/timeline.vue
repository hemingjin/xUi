<template>
    <div class="x-timeline">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'xTimeline',
    props: {
        // 项之间的间距
        spacing: [String, Number]
    }
}
</script>
