<template>
    <div class="x-col" 
        :class="[
            span && span > 0 ? `x-col-${span}`: '',
            xs&&xs>0 ? `x-col-xs-${xs}`: '',
            sm&&sm>0 ? `x-col-sm-${sm}`: '',
            md&&md>0 ? `x-col-md-${md}`: '',
            lg&&lg>0 ? `x-col-lg-${lg}`: '',
            xl&&xl>0 ? `x-col-xl-${xl}`: ''
        ]"
        :style="{'padding-left': gutter / 2 + 'px', 'padding-right': gutter / 2 + 'px' }">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'xCol',
    props: { 
        span: {
            type: Number,
            default: 24
        },
        xs: Number, // <768px 响应式栅格数或者栅格属性对象
        sm: Number, // ≥768px 响应式栅格数或者栅格属性对象
        md: Number, // ≥992 响应式栅格数或者栅格属性对象
        lg: Number, // ≥1200 响应式栅格数或者栅格属性对象
        xl: Number  // ≥1920px 响应式栅格数或者栅格属性对象
    }, 
    computed: {
        gutter() {
            return this.$parent.$props.gutter;
        }
    }
}
</script>
