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
        @dblclick.stop="editTag(tag)"
        :class="{
          'selected': selectedTags.indexOf(tag) !== -1,
          'is-error': rule && !rule(tag)
          }"
        :title="`${!rule(tag) ? '格式不正确': ''}`"
      >
        <span>{{tag}}</span>
        <i class="x-icon icon-close" @click.stop="removeTag(index)"></i>
      </div>
      <input
        class="tag-input"
        type="text"
        :style="{'margin-left': currentTags.length > 0 ? '5px': '0'}" 
        :placeholder="placeholderText"
        v-model.trim="tagValue"
        ref="tagInput" 
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
    placeholderText: {
      type: String,
      default: '请输入'
    },
    rule: {
      type: Function,
      default: function(str) {
        return str
      }
    }, 
  },
  data() {
    return {
      tagValue: "",
      currentTags: [],
      selectedTags: [],
      isFocus: false, 
    };
  },
  mounted() { 
    this.currentTags = this.value;  
    window.addEventListener('keyup', this.keyUpAddTag, false)
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
        this.$message.warning('不能重复添加!')
      }
    },
    // 监听按键enter, spacebar, 分号, 逗号键等, 快捷添加
    keyUpAddTag(e) {
      let keyCode = e.keyCode;
      if(keyCode == 32 || keyCode == 13) {
        this.addTag();
      } else if(keyCode == 186 || keyCode == 188) {
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
    },
    // 点击删除
    removeTag(index) {
      this.selectedTags = [];
      this.currentTags.splice(index, 1);
      this.$emit("input", this.currentTags);
    },
    // 点击选择
    selectTag(tag) { 
      if(!this.rule(tag)) return;
      let hasIndex = this.selectedTags.indexOf(tag);
      if (hasIndex == -1) {
        this.selectedTags.push(tag);
      } else {
        this.selectedTags.splice(hasIndex, 1);
      }
    },
    //TODO 双击编辑
    editTag(tag) {
      console.log(tag)
    },
    focusTagInput() {
      this.$refs.tagInput.focus();
    },
    focusHandle() {
      this.isFocus = true;
    }
  }
};
</script> 