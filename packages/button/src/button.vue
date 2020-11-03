<template>
  <button
    class="x-button"
    :disabled="disabled || loading"
    @click="clickHandle"
    :class="[
            size ? `x-button-${size}` : '',
            type ? `x-button-${type}` : '',
            {
                'is-round': round,
                'is-plain': plain,
                'is-disabled': disabled || loading
            },
            loading ? 'x-button-loading' : ''
        ]"
  >
    <i v-if="icon !== '' " class="x-icon" :class="`icon-${icon}`"></i>
    <i v-if="loading" class="x-icon icon-refresh" :class="{'icon-button-loading': loading}"></i>
    <span>
      <slot></slot>
    </span>
  </button>
</template>
<script>
export default {
  name: "XButton",
  props: {
    // 定义按钮大小
    size: {
      type: String,
      default: "",
      validator: function (value) {
        return value ? ["small", "mini", "large"].includes(value) : true;
      }
    },
    // 定义按钮类型
    type: {
      type: String,
      default: "",
      validator: function (value) {
        return value
          ? ["primary", "danger", "warning", "success", "text"].includes(value)
          : true;
      }
    },
    // 定义按钮图标
    icon: {
      type: String,
      default: ""
    },
    // 是否是长按钮
    long: Boolean,
    // 是否是文本按钮
    plain: Boolean,
    // 是否禁用按钮
    disabled: Boolean,
    // 是否是圆角按钮
    round: {
      type: Boolean,
      default: false
    },
    // 是否加载中状态
    loading: {
      type: Boolean,
      default: false
    }
  },
  computed: { },
  methods: {
    clickHandle () {
      this.$emit("click");
    }
  }
};
</script>
