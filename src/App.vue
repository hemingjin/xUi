<template>
  <div class="container">
    <v-header></v-header> 
    <div id="app" class="page-container"> 
      <div class="side-bar">
        <menu-nav></menu-nav>
      </div>
      <div class="page-view">
        <router-view/>
      </div> 
    </div>
  </div>
</template>

<script>
import vHeader from '@/components/header.vue'
import menuNav from '@/components/menu.vue'
export default {
  name: 'App',
  components: {
    menuNav,
    vHeader
  }
}
</script>  
<style lang="less" scoped>
.contianer{

}
.page-container{
  max-width: 1600px;
  margin: 0 auto;
}
.side-bar {
  width: 200px;
  float: left;
}
.page-view{
  margin-left: 220px;
}
</style>

