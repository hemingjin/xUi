<template>
  <div class="x-select">
    <div class="x-input">
      <input
        class="x-input-inner"
        readonly="readonly"
        :value="currentValue"
        :placeholder="placeholder"
        @focus="isExpend = true"
        @blur="isExpend = false"
      />
      <i class="x-input-fix x-input-suffix x-icon icon-unfold" :class="{'is-expend': isExpend}"></i>
    </div>
    <transition name="fade">
      <div class="x-option-group" v-show="isExpend">
        <!-- <slot></slot> -->
        <div
          class="x-option"
          :class="[{'selected': currentValue == item}]"
          v-for="(item, index) in data"
          :key="index"
          @click="selectHandle(item)"
        >{{item}}</div>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  name: "xSelect",
  props: {
    value: [String, Number],
    data: Array,
    placeholder: String
  },
  data() {
    return {
      currentValue: this.value,
      // 是否展开选择列表
      isExpend: false
    };
  }, 
  methods: {
    // 选中
    selectHandle(data) {
      this.currentValue = data;
      this.$emit("input", data);
    }
  }
};
</script>
