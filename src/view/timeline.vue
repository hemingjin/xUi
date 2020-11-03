<template>
    <div class="page">
        <div class="paget-title">{{pageTitle}} <i class="tip-completed">completed (2019/6/6 17:00)</i></div>
        <demo-show label="基本用法"> 
            <div class="demo">
                <x-timeline :spacing="20">
                    <x-timeline-item>
                        <div>dddddd</div>
                        <div>黑头发黄图附件关于价格已经</div>
                    </x-timeline-item>
                    <x-timeline-item>黑头发黄图附件关于价格已经</x-timeline-item>
                    <x-timeline-item color="error" icon="like_fill">各色各大收到回复退回费和</x-timeline-item>
                    <x-timeline-item>黑头发黄图附件关于价格已经</x-timeline-item>
                    <x-timeline-item>各色各大收到回复退回费和</x-timeline-item>
                    <x-timeline-item>黑头发黄图附件关于价格已经</x-timeline-item>
                    <x-timeline-item icon="time_fill"> 各色各大收到回复退回费和</x-timeline-item> 
                    <x-timeline-item>各色各大收到回复退回费和</x-timeline-item>
                    <x-timeline-item>黑头发黄图附件关于价格已经</x-timeline-item>
                </x-timeline>
            </div>
            <demo-block slot="code">
                &lt;x-timeline :spacing="20"&gt;
                    &lt;x-timeline-item&gt;
                      &lt;div&gt;dddddd&lt;/div&gt;
                      &lt;div&gt;黑头发黄图附件关于价格已经&lt;/div&gt;
                    &lt;/x-timeline-item&gt;
                    &lt;x-timeline-item&gt;黑头发黄图附件关于价格已经&lt;/x-timeline-item&gt;
                    &lt;x-timeline-item color="error" icon="like_fill"&gt;各色各大收到回复退回费和&lt;/x-timeline-item&gt;
                    &lt;x-timeline-item&gt;黑头发黄图附件关于价格已经&lt;/x-timeline-item&gt;
                    &lt;x-timeline-item&gt;各色各大收到回复退回费和&lt;/x-timeline-item&gt;
                    &lt;x-timeline-item&gt;黑头发黄图附件关于价格已经&lt;/x-timeline-item&gt;
                    &lt;x-timeline-item icon="time_fill"&gt; 各色各大收到回复退回费和&lt;/x-timeline-item&gt; 
                    &lt;x-timeline-item&gt;各色各大收到回复退回费和&lt;/x-timeline-item&gt;
                    &lt;x-timeline-item&gt;黑头发黄图附件关于价格已经&lt;/x-timeline-item&gt;
                &lt;/x-timeline&gt;
            </demo-block>
        </demo-show>
        <div class="api-wrap">
            <div class="api-title">组件API</div>
            <div class="api-item-wrap">
                <div class="api-item-title">timeline 属性/attributes</div>
                <x-table :columns="apiColumns" :data-source="timeLineApis"></x-table>
            </div>
            <div class="api-item-wrap">
                <div class="api-item-title">timeline item 属性/attributes</div>
                <x-table :columns="apiColumns" :data-source="timeLineItemApis"></x-table>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            timeLineApis: [
                {prop: 'spacing', type: 'Number', description: '每项之间的间隔(可选)'},
            ],
            timeLineItemApis: [
                {prop: 'highlight', type: 'Boolean', description: '是否高亮(可选)', default: 'false'}, 
                {prop: 'icon', type: 'String', description: '自定义图标展示(可选)', default: '-'},
                {prop: 'color', type: 'String', description: '颜色类型(可选)', options: 'primary/success/error/warning', default: '-'},
            ]
        }
    }
}
</script>
<style lang="less" scoped>

</style>

