<template>
    <div class="page">
        <div class="page-title">{{pageTitle}} <i class="tip-completed">completed (2019/5/24 17:03)</i></div>
        <demo-show label="基本用法"> 
            <div class="demo">
                <x-badge type="danger" :count="1">
                    <x-button>消息</x-button>
                </x-badge>
                <x-badge type="success" :count="20">
                    <x-button type="primary">消息</x-button>
                </x-badge>
                <x-badge type="primary" :count="1000">
                    <x-button>消息</x-button>
                </x-badge>
                <x-badge type="warning" :count="20" :max="10">
                    <x-button type="primary">消息</x-button>
                </x-badge>
            </div>
            <demo-block slot="code">
                &lt;x-badge type="danger" :count="1"&gt;
                    &lt;x-button&gt;消息&lt;/x-button&gt;
                &lt;/x-badge&gt;
                &lt;x-badge type="success" :count="20"&gt;
                    &lt;x-button type="primary"&gt;消息&lt;/x-button&gt;
                &lt;/x-badge&gt;
                &lt;x-badge type="primary" :count="1000"&gt;
                    &lt;x-button&gt;消息&lt;/x-button&gt;
                &lt;/x-badge&gt;
                &lt;x-badge type="warning" :count="20" :max="10"&gt;
                    &lt;x-button type="primary"&gt;消息&lt;/x-button&gt;
                &lt;/x-badge&gt;
            </demo-block>
        </demo-show>
        <demo-show label="小红点类型标记"> 
            <div class="demo">
                <x-badge type="danger" is-dot>
                    <x-button type="text">消息</x-button>
                </x-badge>
                <x-badge type="danger" is-dot>
                    <x-button>消息</x-button>
                </x-badge>
            </div>
            <demo-block slot="code">
                &lt;x-badge type="danger" is-dot&gt;
                    &lt;x-button type="text"&gt;消息&lt;/x-button&gt;
                &lt;/x-badge&gt;
                &lt;x-badge type="danger" is-dot&gt;
                    &lt;x-button&gt;消息&lt;/x-button&gt;
                &lt;/x-badge&gt; 
            </demo-block>
        </demo-show>
        <demo-show label="自定义内容"> 
            <div class="demo">
                <x-badge type="danger" custom="hot">
                    <x-button>消息</x-button>
                </x-badge>
                <x-badge type="success" custom="new">
                    <x-button type="primary">消息</x-button>
                </x-badge>
                <x-badge type="danger" custom="自定义内容">
                    <x-button type="warning">消息</x-button>
                </x-badge>
            </div>
            <demo-block slot="code">
                &lt;x-badge type="danger" custom="hot"&gt;
                    &lt;x-button&gt;消息&lt;/x-button&gt;
                &lt;/x-badge&gt;
                &lt;x-badge type="success" custom="new"&gt;
                    &lt;x-button type="primary"&gt;消息&lt;/x-button&gt;
                &lt;/x-badge&gt;
                &lt;x-badge type="danger" custom="自定义内容"&gt;
                    &lt;x-button type="warning"&gt;消息&lt;/x-button&gt;
                &lt;/x-badge&gt;
            </demo-block>
        </demo-show>
        <demo-show label="综合用例"> 
            <div class="demo">
                <x-badge type="danger" custom="new"> 
                    <x-card>
                        <div class="card-header" slot="header">
                            <x-badge type="danger" is-dot>
                                <span>卡片标题</span>
                            </x-badge> 
                            <x-button type="text" size="mini">更多</x-button>
                        </div>
                        <div class="card-content">
                            卡片内容,卡片内容卡片内容卡片内容卡片内容卡片内容卡片内容卡片内容卡片内容卡片内容
                        </div>
                    </x-card>
                </x-badge>
            </div>
            <demo-block slot="code">
                &lt;x-badge type="danger" custom="new"&gt; 
                    &lt;x-card&gt;
                        &lt;div class="card-header" slot="header"&gt;
                            &lt;x-badge type="danger" is-dot&gt;
                                &lt;span&gt;卡片标题&lt;/span&gt;
                            &lt;/x-badge&gt; 
                            &lt;x-button type="text" size="mini"&gt;更多&lt;/x-button&gt;
                        &lt;/div&gt;
                        &lt;div class="card-content"&gt;
                            卡片内容,卡片内容卡片内容卡片内容卡片内容卡片内容卡片内容卡片内容卡片内容卡片内容
                        &lt;/div&gt;
                    &lt;/x-card&gt;
                &lt;/x-badge&gt;
            </demo-block>
        </demo-show>
    </div>
</template>
<script>
export default {
    data() {
        return {

        }
    }
}
</script>
<style lang="less">
.x-badge{
    margin-right: 20px;
}
</style>

