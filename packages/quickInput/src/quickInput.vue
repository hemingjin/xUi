<template>
  <div class="quick-input-wrap">
    <x-input ref="xInput" width="240" v-model="currentValue" clearable @input="triggerQuickView"></x-input>
    <transition name="fade">
      <div class="quick-view" :style="quickViewStyle" v-show="isShowQuickView">
        <div
          class="quick-item"
          v-for="(item, index) in quickData"
          :key="index"
          :class="{'selected': selectedIndex === index}"
          @click="quickSelect(item)"
        >{{item}}</div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "xQuickInput",
  props: {
    suffix: {
      type: Array,
      default: function() {
        return [1, 2, 3];
      }
    },
    value: String,
    type: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      currentValue: this.value,
      quickViewStyle: {},
      isShowQuickView: false,
      selectedIndex: 0,
      quickData: []
    };
  },
  computed: { 
  },
  watch: { 
  },
  mounted() {
    this.quickViewStyle = {
      top: this.$refs.xInput.$el.offsetHeight + "px",
      width: this.$refs.xInput.$el.offsetWidth + "px"
    };
    this.addEventProxy();
    this.keyPressHandle();
  },
  methods: {
    // 显示隐藏快捷选择框
    triggerQuickView(data) { 
      this.$emit('input', data)
      if(data != '' && data != undefined) {
        this.isShowQuickView = true;
        this.quickData = this.suffix.map(item => {
          return this.currentValue + this.type + item;
        });
      } else {
        this.isShowQuickView = false;
      }
    },
    // 添加事件代理委托
    addEventProxy() {
      let self = this;
      document.addEventListener('click', function(e) {
        let clickEl = e.target.className.toLowerCase(); 
        if (clickEl !== "quick-view") {
          self.isShowQuickView = false;
          self.selectedIndex = 0;
        }
      }, false)
    },
    // 监听键盘上下键，实现快速选择
    keyPressHandle() {
      let self = this;
      document.addEventListener(
        "keydown",
        function(e) {
          // 只在显示快捷数据选框时监听
          if (self.isShowQuickView) {
            let keyCode = e.keyCode;
            if (keyCode == 38) {
              // 上
              if (self.selectedIndex <= 0) {
                self.selectedIndex = self.quickData.length - 1;
              } else {
                self.selectedIndex -= 1;
              }
            } else if (keyCode == 40) {
              // 下
              if (self.selectedIndex < self.quickData.length - 1) {
                self.selectedIndex += 1;
              } else {
                self.selectedIndex = 0;
              }
            } else if (keyCode == 13) {
              self.quickSelect(self.quickData[self.selectedIndex]);
              
            }
          }
        },
        false
      );
    },
    // 选中事件
    quickSelect(data) {
      this.currentValue = data;
      this.isShowQuickView = false;
      this.selectedIndex = 0; 
      this.$emit('input', data)
    }
  }
};
</script> 