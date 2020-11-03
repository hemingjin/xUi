<template>
    <div class="x-row" 
        :style="{'margin-left': -gutter / 2 + 'px', 'margin-right': -gutter / 2 + 'px' }">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'xRow',
    props: {
        gutter: Number
    }
}
</script>