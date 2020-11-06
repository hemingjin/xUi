<template>
  <div class="page">
    <div class="page-title">{{pageTitle}}</div>
    <demo-show label="基本用法">
      <div class="demo">
        <x-quick-input v-model="test1"></x-quick-input>

        
        <x-quick-input v-model="email" type="@" :suffix="suffixArr"></x-quick-input>
      </div>
      <demo-block slot="code">

         </demo-block>
    </demo-show>
  </div>
</template>

<script>
export default {
  data() {
    return {
      test1: '',
      email: '',
      suffixArr: ['163.com', 'sina.com', 'qq.com', 'segseg.com']
    }
  },

}
</script>

<style>

</style>