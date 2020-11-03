<template>
    <div class="container">
        <div class="page-container">
            <div class="side-bar">
                <menu-nav></menu-nav>
            </div>
            <div class="page-view">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
<script> 
import menuNav from './menu.vue'
export default {
    components: {
        menuNav
    }
}
</script>
<style lang="less" scoped>

</style>
