<template>
  <div class="page">
    <div class="page-title">{{pageTitle}}</div>
    <demo-show label="基本用法">
      <div class="demo">
        <x-button @click="showMessage('info')">默认</x-button>
        <x-button @click="showMessage('success')">成功</x-button>
        <x-button @click="showMessage('warning')">警告</x-button>
        <x-button @click="showMessage('error')">失败</x-button>
      </div>
      <demo-block slot="code"></demo-block>
    </demo-show>
    <demo-show label="基本用法2">
      <div class="demo">
        <x-button @click="showMessage2('info')">默认</x-button>
        <x-button @click="showMessage2('success')">成功</x-button>
        <x-button @click="showMessage2('warning')">警告</x-button>
        <x-button @click="showMessage2('error')">失败</x-button>
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
    showMessage(type) {
      this.$message({type, message: '这是一条消息提示！'})
    },
    showMessage2(type) {
      this.$message[type]('这是一条消息提示！')
    }
  }
};
</script>
