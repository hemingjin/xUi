<template>
  <div class="page">
    <div class="page-title">{{pageTitle}}</div>
    <demo-show label="基本用法">
      <div class="demo">
        <x-tag-input v-model="tags"></x-tag-input>
 
      </div>
      <demo-block slot="code">

         </demo-block>
    </demo-show>
    <demo-show label="带规则验证用法">
      <div class="demo">
        <x-tag-input v-model="ruleTags" :rule.sync="isUrl" placeholder-text="请输入网址"></x-tag-input>
 
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
      tags: [],
      ruleTags: []
    }
  },
  methods: {
    isUrl(str){
      return  /^(((ht|f)tps?):\/\/)?[\w-]+(\.[\w-]+)+([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?$/.test(str)
    }
  }
}
</script>

<style>

</style>