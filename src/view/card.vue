<template>
    <div class="page">
        <div class="page-title">{{pageTitle}} <i class="tip-completed">completed (2019/5/24 15:00)</i></div>
        <demo-show label="用法展示"> 
            <div class="demo">
                <x-row :gutter=10>
                    <x-col :span="6">
                        <x-card>
                            <div class="card-header" slot="header">
                                <span>卡片标题</span>
                                <x-button type="text" size="mini">更多</x-button>
                            </div>
                            <div class="card-content">
                                卡片内容,卡片内容卡片内容卡片内容卡片内容卡片内容卡片内容卡片内容卡片内容卡片内容
                            </div>
                        </x-card>
                    </x-col>
                    <x-col :span="12">
                        <x-card>
                            <div class="card-header" slot="header">
                                <span>卡片标题</span>
                                <x-tooltip content="搜索更多信息！！！！"> 
                                    <x-button type="text" size="mini">更多</x-button>
                                </x-tooltip>
                            </div>
                            <div class="card-content">
                                <x-row :gutter=10>
                                    <x-col :span="12">
                                        <x-card>
                                            <div class="card-header" slot="header">
                                                <span>卡片标题</span> 
                                                <i class="x-icon icon-search" style="color: #007fff"></i>
                                            </div>
                                            <div class="card-content"> 
                                                hello card
                                                <x-card :width="120"> 
                                                    <div class="card-content">
                                                        没有标题的卡片 <br> 
                                                    </div>
                                                </x-card>
                                            </div>
                                        </x-card>
                                    </x-col>
                                    <x-col :span="12">
                                        <x-card>
                                            <div class="card-header" slot="header">
                                                <span>卡片标题</span> 
                                            </div>
                                            <div class="card-content">
                                                卡片内容,卡片内容卡片内容卡片内容卡片内容卡片内容卡片内容卡片内容卡片内容卡片内容
                                            </div>
                                        </x-card>
                                    </x-col>
                                </x-row> 
                            </div>
                        </x-card> 
                    </x-col> 
                    <x-col :span="6">
                        <x-card> 
                            <div class="card-content">
                                没有标题的卡片 <br>
                                <x-button type="danger">hahaha</x-button> <br>
                                卡片内容,卡片内容卡片内容卡片内容卡片内容卡片内容卡片内容卡片内容卡片内容卡片内容
                            </div>
                        </x-card>
                    </x-col>
                </x-row>
            </div>
            <demo-block slot="code">
                &lt;style lang="less" scoped&gt;
                    .card-header{
                        width:100%;
                        display: flex; 
                        justify-content: space-between;
                        align-items: center; 
                    }
                    .card-content{
                        line-height: 1.4;
                    }
                &lt;/style&gt;
                &lt;x-row :gutter=10&gt;
                    &lt;x-col :span="6"&gt;
                        &lt;x-card&gt;
                            &lt;div class="card-header" slot="header"&gt;
                                &lt;span&gt;卡片标题&lt;/span&gt;
                                &lt;x-button type="text" size="mini"&gt;更多&lt;/x-button&gt;
                            &lt;/div&gt;
                            &lt;div class="card-content"&gt;
                                卡片内容,卡片内容卡片内容卡片内容卡片内容卡片内容卡片内容卡片内容卡片内容卡片内容
                            &lt;/div&gt;
                        &lt;/x-card&gt;
                    &lt;/x-col&gt;
                    &lt;x-col :span="12"&gt;
                        &lt;x-card&gt;
                            &lt;div class="card-header" slot="header"&gt;
                                &lt;span&gt;卡片标题&lt;/span&gt;
                                &lt;x-tooltip content="搜索更多信息！！！！"&gt; 
                                    &lt;x-button type="text" size="mini"&gt;更多&lt;/x-button&gt;
                                &lt;/x-tooltip&gt;
                            &lt;/div&gt;
                            &lt;div class="card-content"&gt;
                                &lt;x-row :gutter=10&gt;
                                    &lt;x-col :span="12"&gt;
                                        &lt;x-card&gt;
                                            &lt;div class="card-header" slot="header"&gt;
                                                &lt;span&gt;卡片标题&lt;/span&gt; 
                                                &lt;i class="x-icon icon-search" style="color: #007fff"&gt;&lt;/i&gt;
                                            &lt;/div&gt;
                                            &lt;div class="card-content"&gt; 
                                                hello card
                                                &lt;x-card :width="120"&gt; 
                                                    &lt;div class="card-content"&gt;
                                                        没有标题的卡片 &lt;br&gt; 
                                                    &lt;/div&gt;
                                                &lt;/x-card&gt;
                                            &lt;/div&gt;
                                        &lt;/x-card&gt;
                                    &lt;/x-col&gt;
                                    &lt;x-col :span="12"&gt;
                                        &lt;x-card&gt;
                                            &lt;div class="card-header" slot="header"&gt;
                                                &lt;span&gt;卡片标题&lt;/span&gt; 
                                            &lt;/div&gt;
                                            &lt;div class="card-content"&gt;
                                                卡片内容,卡片内容卡片内容卡片内容卡片内容卡片内容卡片内容卡片内容卡片内容卡片内容
                                            &lt;/div&gt;
                                        &lt;/x-card&gt;
                                    &lt;/x-col&gt;
                                &lt;/x-row&gt; 
                            &lt;/div&gt;
                        &lt;/x-card&gt; 
                    &lt;/x-col&gt; 
                    &lt;x-col :span="6"&gt;
                        &lt;x-card&gt; 
                            &lt;div class="card-content"&gt;
                                没有标题的卡片 &lt;br&gt;
                                &lt;x-button type="danger"&gt;hahaha&lt;/x-button&gt; &lt;br&gt;
                                卡片内容,卡片内容卡片内容卡片内容卡片内容卡片内容卡片内容卡片内容卡片内容卡片内容
                            &lt;/div&gt;
                        &lt;/x-card&gt;
                    &lt;/x-col&gt;
                &lt;/x-row&gt; 
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
<style lang="less" scoped>
</style>


