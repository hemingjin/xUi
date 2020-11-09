<template>
  <transition name="x-message-fade" @after-leave="handleAfterLeave">
    <div
      class="x-message"
      :class="[
        type ? `x-message-${this.type}` : '', 
        `x-message-pos-${this.position}`
      ]"
      v-show="visible"
      @mouseenter="clearTimer"
      @mouseleave="startTimer"
    >
      <i class="x-icon" :class="typeClass"></i>
      <span>{{this.message}}</span>
      <i class="x-icon icon-close" v-if="showClose" @click="close"></i>
    </div>
  </transition>
</template>

<script>
const typeMap = {
  success: "success",
  info: "info",
  warning: "warning",
  error: "close"
};
export default {
  data() {
    return {
      visible: false,
      type: "info",
      message: "",
      duration: 2000,
      position: "top",
      timer: null,
      showClose: false,
      closed: false,
      onClose: null
    };
  },
  computed: {
    typeClass() {
      return this.type ? `icon-${typeMap[this.type]}` : "icon-info";
    }
  },
  watch: {
    closed(to) {
      if(to) {
        this.visible = false
      }
    }
  },
  mounted() {
    this.startTimer();
  },
  methods: {
    handleAfterLeave() {
      this.$destroy(true);
      this.$el.parentNode.removeChild(this.$el);
    },
    close() { 
      this.closed = true;
      if (typeof this.onClose == "function") {
        this.onClose(this);
      }
    },
    clearTimer() {
      clearTimeout(this.timer)
    },
    startTimer() {
      // 当时间设置大于0ms时，才执行自动关闭
      if (this.duration > 0) {
        this.timer = setTimeout(() => {
          if (!this.closed) {
            this.close();
          }
        }, this.duration);
      }
    },
  },
  destroyed() {
    clearTimeout(this.timer);
  }
};
</script> 