<template>
  <transition name="x-messagebox-fade">
    <div class="x-messagebox-wrap" v-show="visible">
      <div class="x-messagebox" >
        <div class="header">
          <span>{{title}}</span>
          <i class="x-icon icon-close" @click="cancel"></i>
        </div>
        <div class="content">
          <i class="x-icon" :class="`icon-${type}`"></i>
          <div class="message_content">{{message}}</div>
        </div>
        <div class="footer">
          <x-button plain size="mini" v-if="showCancel" @click="cancel">{{cancelButtonText}}</x-button>
          <x-button type="primary" size="mini" @click="confirm">{{confirmButtonText}}</x-button>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  data() {
    return {
      visible: false,
      title: "提示",
      message: "",
      type: "info",
      confirmButtonText: "确定",
      cancelButtonText: "取消",
      showCancel: true
    };
  },
  mounted() {},
  methods: {
    confirm() {
      this.visible = false;
      this.callback && this.callback("confirm");
    },
    cancel() {
      this.visible = false;
      this.callback && this.callback();
    }
  }, 
};
</script> 