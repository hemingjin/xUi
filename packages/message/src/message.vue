<template>
  <transition name="x-message-fade">
    <div
      class="x-message"
      :class="[
        type ? `x-message-${this.type}` : '', 
        `x-message-pos-${this.position}`
      ]"
      v-show="visible"
    >
      <i class="x-icon" :class="typeClass"></i>
      <span>{{this.message}}</span>
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
      timer: null
    };
  },
  computed: {
    typeClass() {
      return this.type ? `icon-${typeMap[this.type]}` : "icon-info";
    }
  },
  mounted() {
    this.startTimer();
  },
  methods: {
    startTimer() {
      // 当时间设置大于0ms时，才执行自动关闭
      if (this.duration > 0) {
        this.timer = setTimeout(() => {
          this.visible = false;
          this.$el.parentNode.removeChild(this.$el);
        }, this.duration);
      }
    }
  },
  destroyed() {
    clearTimeout(this.timer);
  }
};
</script> 