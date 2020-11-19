<template>
  <div
    class="x_tag_input_wrap"
    :class="{'is-focus': isFocus }"
    @click.prevent="focusTagInput"
    ref="tagInputView"
  >
    <div class="tags">
      <div
        class="tag-item"
        v-for="(tag, index) in currentTags"
        :key="index"
        @click.stop="selectTag(tag)"
        :class="{ 
            'is-error': rule && !rule(tag)
            }"
        :style="{'max-width': itemMaxWidth + 'px'}"
        :title="`${!rule(tag) ? `格式错误:${tag}`: tag}`"
      >
        <div ref="tagSpan" class="tag-span">{{ tag }}</div>
        <input
          class="tag_input_inner"
          readonly
          v-model.trim="currentTags[index]"
          @dblclick.stop="editTag($event, tag, index)"
          @blur.stop="cancelEditTag($event)"
          @keyup.enter="cancelEditTag($event)"
          ref="editInputInner"
        /> 
        <i class="x-icon icon-close" @click.stop="removeTag($event, index)"></i>
      </div>

      <input
        class="tag-input"
        type="text"
        :style="{'margin-left': currentTags.length > 0 ? '5px': '0'}"
        :placeholder="placeholderText"
        v-model.trim="tagValue"
        ref="tagInput"
        @keyup.enter="addTag"
        @blur="addTag"
        @keyup.delete="deleteTag"
        @focus="focusHandle"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'xTagInput',
  props: {
    value: {
      type: [String, Array]
    },
    placeholderText: String,
    rule: {
      type: Function,
      default: function(str) {
        return str;
      }
    },
    itemMaxWidth: {
      type: [String, Number],
      default: 240
    }
  },
  data() {
    return {
      tagValue: "",
      currentTags: [],
      selectedTags: [],
      isFocus: false,
      editTagValue: "",
      editTagInputStyle: {},
      editIndex: 0
    };
  },
  mounted() {
    this.currentTags = this.value;
    window.addEventListener("keyup", this.keyUpAddTag, false); 
  },
  methods: {
    // 添加
    addTag() {
      this.isFocus = false;
      if (!this.tagValue) return;
      let index = this.currentTags.indexOf(this.tagValue);
      if (index == -1) {
        this.currentTags.push(this.tagValue);
        this.tagValue = "";
        this.$refs.tagInput.focus();
        this.$emit("input", this.currentTags);
      } else {
        this.$message.warning("不能重复添加!");
      }

      this.setEditInputInnerWidth();
    },
    // 监听按键enter, spacebar, 分号, 逗号键等, 快捷添加
    keyUpAddTag(e) {
      let keyCode = e.keyCode;
      if (keyCode == 32 || keyCode == 13) {
        this.addTag();
      } else if (keyCode == 186 || keyCode == 188) {
        // 按下';', ','键时，应该将字符串最后一位截取掉
        this.tagValue = this.tagValue.substring(0, this.tagValue.length - 1);
        this.addTag();
      }
    },
    // 退格删除
    deleteTag() {
      this.selectedTags = [];
      if (this.tagValue == "") {
        this.currentTags.pop();
        this.$emit("input", this.currentTags);
      }
      this.setEditInputInnerWidth();
    },
    // 点击删除
    removeTag(e, index) {
      let prevNode = e.target.previousElementSibling;
      if (!prevNode.hasAttribute("readonly")) { 
        return;
      }
      this.selectedTags = [];
      this.currentTags.splice(index, 1);
      this.setEditInputInnerWidth();
      this.$emit("input", this.currentTags);
    },
    // 点击选择
    selectTag(tag) {
      if (!this.rule(tag)) return;
      let hasIndex = this.selectedTags.indexOf(tag);
      if (hasIndex == -1) {
        this.selectedTags.push(tag);
      } else {
        this.selectedTags.splice(hasIndex, 1);
      }
    },
    // 双击编辑
    editTag(e, tag, index) {
      this.editTagValue = tag;
      this.editIndex = index; 
      this.$refs.editInputInner[index].focus();
      e.target.removeAttribute("readonly");
      let parentNode = e.target.parentNode; // 父元素
      let nextNode = e.target.nextElementSibling; // 下一个元素
      parentNode.style.background = 'transparent'; 
      nextNode.style.display = 'none'
    },
    // 取消编辑
    cancelEditTag(e) {
      e.target.setAttribute("readonly", "");
      let parentNode = e.target.parentNode;
      let nextNode = e.target.nextElementSibling; 
      if(!this.rule(e.target.value)) {
        // 是否符合格式
        parentNode.style.background = '#e74c3c'; 
      } else {
        parentNode.style.background = 'rgb(69 90 147)'; 
      }
      nextNode.style.display = 'block'; 
      
      this.setEditInputInnerWidth();
    }, 
    // 点击tag-input-view, tag-input获取焦点
    focusTagInput() {
      this.$refs.tagInput.focus();
    },
    focusHandle() {
      this.isFocus = true;
    },
    
    // 根据内容宽度设置editInputInner的宽度
    setEditInputInnerWidth() {
      this.$nextTick(() => { 
        this.$refs.tagSpan.forEach((item, index) => {  
          this.$refs.editInputInner[index].style.width = item.offsetWidth + 'px' 
        }) 
      })
    },
  }
};
</script> 