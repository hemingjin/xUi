<template>
  <div class="demo-block"> 
		<div class="code-wrap">
      <pre v-highlightjs>
          <code :class="codeType" ref="codeRef"> 
            <slot></slot>
          </code>
        </pre>
    </div> 
  </div>
</template>
<script>
export default { 
  props: {
    // 代码类型: html, css, js .......
    codeType: {
      type: String,
      default: "html"
    }
  },
  mounted() {
    if (this.codeType === "html") {
      // console.log(this.$refs.codeRef.innerHTML)
      // console.log(this.HTMLEncode(this.$refs.codeRef.innerHTML))
      // this.$refs.codeRef.innerHTML = this.HTMLEncode(this.$refs.codeRef.innerHTML)
    }
  },
  methods: {
    HTMLEncode(html) {
      var temp = document.createElement("div");
      temp.textContent != null
        ? (temp.textContent = html)
        : (temp.innerText = html);
      var output = temp.innerHTML;
      temp = null;
      return output;
    }
  }
};
</script>
<style lang="less" scoped>
@import "./index.less";
</style>
