<template>
  <div class="page">
    <div class="page-title">{{pageTitle}}</div>
    <demo-show label="基本用法">
      <div class="demo">
        <x-button @click="showMessageBox">基本用法</x-button> 
      </div>
      <demo-block slot="code"></demo-block>
    </demo-show>
    <demo-show label="基本用法2">
      <div class="demo">
        <x-button @click="showMessageBox2">基本用法2</x-button> 
      </div>
      <demo-block slot="code"></demo-block>
    </demo-show>
    <demo-show label="基本用法3">
      <div class="demo">
        <x-button @click="showMessageBox3">基本用法3</x-button> 
      </div>
      <demo-block slot="code"></demo-block>
    </demo-show>
     
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    showMessageBox() {
      this.$messageBox({
        title: '提示',
        message: '这是一项重要操作',
        type: 'warning', 
        confirmButtonText: '确定操作', 
      })
      .then((res) => { 
        this.$message.success('操作成功')
      }).catch(() => {
        this.$message.info('取消操作')
        
      })
    }, 
    showMessageBox2() {
      this.$messageBox({
        title: '提示',
        message: '这是一项重要操作',
        type: 'success',
        showCancel: false,
        confirmButtonText: '确定操作', 
      })
      .then((res) => { 
        this.$message.success('操作成功')
      }).catch(() => {
        this.$message.info('取消操作')
        
      })
    }, 
    showMessageBox3() {
      this.$messageBox('这是一项重要操作')
      .then((res) => { 
        this.$message.success('操作成功')
      }).catch(() => {
        this.$message.info('取消操作')
        
      })
    },
  }
};
</script>
