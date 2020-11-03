<template>
  <div class="page">
    <h2 class="page-title">{{pageTitle}}</h2>
    <demo-show label="基础用法">
      <div class="demo">
        <x-row>
          <x-col :span="8">
            <div class="col_item col_item_2">span=8</div>
          </x-col>
          <x-col :span="8">
            <div class="col_item col_item_1">span=8</div>
          </x-col>
          <x-col :span="8">
            <div class="col_item col_item_2">span=8</div>
          </x-col>
        </x-row>
        <x-row :gutter="20">
          <x-col :span="12">
            <div class="col_item col_item_2">span=12 gutter=20</div>
          </x-col>
          <x-col :span="12">
            <div class="col_item col_item_1">span=12 gutter=20</div>
          </x-col>
        </x-row>
      </div> 
      <demo-block slot="code">
        &lt;x-row&gt;
            &lt;x-col :span="8"&gt;&lt;div class="col_item col_item_2"&gt;&lt;/div&gt;&lt;/x-col&gt;
            &lt;x-col :span="8"&gt;&lt;div class="col_item col_item_1"&gt;&lt;/div&gt;&lt;/x-col&gt;
            &lt;x-col :span="8"&gt;&lt;div class="col_item col_item_2"&gt;&lt;/div&gt;&lt;/x-col&gt;
        &lt;/x-row&gt;
        &lt;x-row :gutter="20"&gt;
            &lt;x-col :span="12"&gt;&lt;div class="col_item col_item_2"&gt;&lt;/div&gt;&lt;/x-col&gt;
            &lt;x-col :span="12"&gt;&lt;div class="col_item col_item_1"&gt;&lt;/div&gt;&lt;/x-col&gt;
        &lt;/x-row&gt;
      </demo-block> 
    </demo-show> 
    <demo-show label="响应式布局">
        <div class="demo">
        <x-row :gutter="10">
          <x-col :xs="24" :md="12" :lg="6" :xl="6">
            <div class="col_item col_item_2">xs="24" md="12" lg="6" xl="6"</div>
          </x-col>
          <x-col :xs="24" :md="12" :lg="6" :xl="6">
            <div class="col_item col_item_1">xs="24" md="12" lg="6" xl="6"</div>
          </x-col>
          <x-col :xs="24" :md="12" :lg="6" :xl="6">
            <div class="col_item col_item_2">xs="24" :md="12" :lg="6" :xl="6"</div>
          </x-col>
          <x-col :xs="24" :md="12" :lg="6" :xl="6">
            <div class="col_item col_item_1">:xs="24" :md="12" :lg="6" :xl="6"</div>
          </x-col>
          <x-col :xs="24" :md="12" :lg="6" :xl="16">
            <div class="col_item col_item_2">:xs="24" :md="12" :lg="6" :xl="16"</div>
          </x-col>
          <x-col :xs="24" :md="12" :lg="6" :xl="16">
            <div class="col_item col_item_1">:xs="24" :md="12" :lg="6" :xl="16"</div>
          </x-col>
        </x-row>
        <x-row :gutter="40">
          <x-col :xs="24" :md="12" :lg="6" :xl="6">
            <div class="col_item col_item_1">:xs="24" :md="12" :lg="6" :xl="6"</div>
          </x-col>
          <x-col :xs="24" :md="12" :lg="6" :xl="6">
            <div class="col_item col_item_2">:xs="24" :md="12" :lg="6" :xl="6"</div>
          </x-col>
          <x-col :xs="24" :md="12" :lg="6" :xl="6">
            <div class="col_item col_item_1">:xs="24" :md="12" :lg="6" :xl="6"</div>
          </x-col>
          <x-col :xs="24" :md="12" :lg="6" :xl="6">
            <div class="col_item col_item_2">:xs="24" :md="12" :lg="6" :xl="6"</div>
          </x-col>
        </x-row>
      </div>
      <demo-block slot="code">
        &lt;x-row :gutter="10"&gt;
            &lt;x-col :xs="24" :md="12" :lg="6" :xl="6"&gt;
                &lt;div class="col_item col_item_2"&gt;&lt;/div&gt;
            &lt;/x-col&gt;
            &lt;x-col :xs="24" :md="12" :lg="6" :xl="6"&gt;
                &lt;div class="col_item col_item_1"&gt;&lt;/div&gt;
            &lt;/x-col&gt;
            &lt;x-col :xs="24" :md="12" :lg="6" :xl="6"&gt;
                &lt;div class="col_item col_item_2"&gt;&lt;/div&gt;
            &lt;/x-col&gt;
            &lt;x-col :xs="24" :md="12" :lg="6" :xl="6"&gt;
                &lt;div class="col_item col_item_1"&gt;&lt;/div&gt;
            &lt;/x-col&gt;
            &lt;x-col :xs="24" :md="12" :lg="6" :xl="16"&gt;
                &lt;div class="col_item col_item_2"&gt;&lt;/div&gt;
            &lt;/x-col&gt;
            &lt;x-col :xs="24" :md="12" :lg="6" :xl="16"&gt;
                &lt;div class="col_item col_item_1"&gt;&lt;/div&gt;
            &lt;/x-col&gt;
        &lt;/x-row&gt;
        &lt;x-row :gutter="40"&gt;
            &lt;x-col :xs="24" :md="12" :lg="6" :xl="6"&gt;
                &lt;div class="col_item col_item_1"&gt;&lt;/div&gt;
            &lt;/x-col&gt;
            &lt;x-col :xs="24" :md="12" :lg="6" :xl="6"&gt;
                &lt;div class="col_item col_item_2"&gt;&lt;/div&gt;
            &lt;/x-col&gt;
            &lt;x-col :xs="24" :md="12" :lg="6" :xl="6"&gt;
                &lt;div class="col_item col_item_1"&gt;&lt;/div&gt;
            &lt;/x-col&gt;
            &lt;x-col :xs="24" :md="12" :lg="6" :xl="6"&gt;
                &lt;div class="col_item col_item_2"&gt;&lt;/div&gt;
            &lt;/x-col&gt;
        &lt;/x-row&gt;
      </demo-block>
    </demo-show> 
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  computed: {}
};
</script>

<style lang="less" scoped>
.col_item {
  height: 40px;
  width: 100%;
  border-radius: 4px;
  margin-bottom: 10px;
  line-height: 40px;
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  font-family: Consolas;
  &.col_item_1 {
    background-color: #ccc;
  }
  &.col_item_2 {
    background-color: #eee;
  }
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
}
</style>
