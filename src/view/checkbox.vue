<template>
  <div class="page">
    <div class="page-title">
      {{pageTitle}}
      <i class="tip-fixed">to FIXED (2019/5/22 16:00)</i>
    </div>
    <demo-show label="基本用法">
      <div class="demo">
        <!-- <x-checkbox-group>
                    <x-checkbox v-model="checked">演示一</x-checkbox>
                    <x-checkbox v-model="checked">演示一</x-checkbox>
                    <x-checkbox v-model="checked">演示一</x-checkbox>
                </x-checkbox-group>
        <x-checkbox v-model="checked">演示一</x-checkbox>-->
        <div class="demo-item">
          {{checkListValue1}}
          <x-check-list v-model="checkListValue1" :source="checkListSource1" />
        </div>
        <div class="demo-item">
          {{checkListValue}}
          <x-check-list v-model="checkListValue" :source="checkListSource" />
          <br />
          <x-button size="mini" @click="onSelectedAll">{{isSelectedAll ? `反选` : `全选` }}</x-button>
        </div>
      </div>
      <demo-block slot="code"></demo-block>
    </demo-show>
  </div>
</template>
<script>
export default {
  data() {
    return {
      checkListValue1: [{ label: "香蕉", value: 1 }],
      checkListSource1: [
        { label: "香蕉", value: 1 },
        { label: "苹果", value: 2 },
        { label: "橘子", value: 3 }
      ],
      checkListValue: [{ label: "香蕉", value: 1 }],
      checkListSource: [
        { label: "香蕉", value: 1 },
        { label: "苹果", value: 2 },
        { label: "橘子", value: 3 }
      ]
    };
  },
  computed: {
    isSelectedAll: {
      get() {
        return this.checkListValue.length === this.checkListSource.length
          ? true
          : false;
      },
      set() {}
    }
  },
  watch: {
    checkListValue(to, from) {
      if (to.length == this.checkListSource.length) {
        this.isSelectedAll = true;
      } else if (to.length == 0) {
        this.isSelectedAll = false;
      }
    }
  },
  created() {},
  methods: {
    onSelectedAll() {
      if (this.isSelectedAll) {
        this.isSelectedAll = false;
        this.checkListValue = [];
      } else {
        this.isSelectedAll = true;
        this.checkListValue = this.checkListSource;
      }
    }
  }
};
</script>

