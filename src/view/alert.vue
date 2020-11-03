<template>
  <div class="page">
    <div class="page-title">{{pageTitle}}</div>
    <demo-show label="基本用法">
      <div class="demo">
        <x-alert content="这是一条警告" is-border></x-alert>
        <x-alert type="error" content="这是一条警告"></x-alert>
        <x-alert type="success" content="陈宫了！恭喜你，guy,你中了500，00，00元!"></x-alert>
      </div>
      <demo-block slot="code">
        &lt;x-alert content="这是一条警告"&gt;&lt;/x-alert&gt;
        &lt;x-alert type="error" content="这是一条警告"&gt;&lt;/x-alert&gt;
        &lt;x-alert type="success" content="陈宫了！恭喜你，guy,你中了500，00，00元!"&gt;&lt;/x-alert&gt;
      </demo-block>
    </demo-show>
    <demo-show label="可关闭的、带标题的、自定义关闭文字的、带边框的警告提示">
      <div div="demo">
        <x-alert content="这是一条警告" is-closeable></x-alert>
        <x-alert
          is-border
          type="success"
          close-text="关闭提示"
          is-closeable
          title="中奖通知"
          content="陈宫了！恭喜你，guy,你中了500，00，00元!"
        ></x-alert>
      </div>
      <demo-block slot="code">
        &lt;x-alert content="这是一条警告" is-closeable&gt;&lt;/x-alert&gt;
        &lt;x-alert type="success" close-text="关闭提示" title="中奖通知" content="陈宫了！恭喜你，guy,你中了500，00，00元!"&gt;&lt;/x-alert&gt;
      </demo-block>
    </demo-show>
    <div class="api-wrap">
      <div class="api-title">组件API</div>
      <div class="api-item-wrap">
        <div class="api-item-title">组件属性/component attributes</div>
        <x-table :columns="apiColumns" :data-source="attributesData"></x-table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      attributesData: [
        {
          prop: "type",
          description: "警告提示类型",
          type: "String",
          options: "warning/success/error",
          default: "warning"
        },
        {
          prop: "title",
          description: "警告标题（可选）",
          type: "String",
          options: "-",
          default: "-"
        },
        {
          prop: "content",
          description: "警告提示内容（必填）",
          type: "String",
          options: "-",
          default: "-"
        },
        {
          prop: "isCloseable",
          description: "是否可以手动关闭",
          type: "Boolean",
          options: "-",
          default: "false"
        },
        {
          prop: "closeText",
          description: "自定义的关闭文字(可选)",
          type: "String",
          options: "-",
          default: "-"
        },
        {
          prop: "isBorder",
          description: "是否具有边框(可选)",
          type: "Boolean",
          options: "-",
          default: "false"
        }
      ]
    };
  }
};
</script>
<style lang="less" scoped>
.x-alert {
  margin-bottom: 10px;
}
</style>

