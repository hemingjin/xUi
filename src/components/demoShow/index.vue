<template>
  <div class="demo_show">
    <div class="header">
      <span class="title">{{label}}</span>
      <span class="handle">
        <i class="ri-code-line" @click="isShowCode = !isShowCode"></i>
      </span>
    </div>
    <div class="content">
      <div class="demo" v-if="!isShowCode">  
        <slot ></slot>
      </div>
      <div class="code" v-else >  
        <slot name="code"></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isShowCode: false,
      isSplit: true,
    }
  },
  props: {
    label: String
  }
}
</script>
<style lang="less" scoped>
.demo_show {
  position: relative;
  margin-bottom: 20px;
  border: 1px solid #eee;
  .header {
    padding: 5px 10px;
    background: #eee;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .title {
      margin-right: 10px;
      font-size: 14px;
    }
    .handle {
      display: flex;
      justify-content: space-between;
      margin-left: 10px;

      i {
        font-size: 18px;
        color: #666;
        cursor: pointer;
        &:hover {
          color: #999;
        }
      }
    }
  }
  .content {
    padding: 10px;
  }
}
</style>