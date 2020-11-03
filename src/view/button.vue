<template>
    <div class="page"> 
        <h2 class="page-title">{{pageTitle}}</h2>
        <demo-show label="基本用法"> 
            <div class="demo">
                <x-button>默认按钮</x-button>  
                <x-button  type="primary">常规按钮</x-button> 
                <x-button  type="danger">危险按钮</x-button> 
                <x-button  type="success">成功按钮</x-button> 
                <x-button  type="warning">警告按钮</x-button> 
            </div>
            <demo-block slot="code"> 
                &lt;x-button&gt;默认按钮&lt;/x-button&gt;  
                &lt;x-button  type="primary"&gt;常规按钮&lt;/x-button&gt;  
                &lt;x-button  type="danger"&gt;危险按钮&lt;/x-button&gt; 
                &lt;x-button  type="success"&gt;成功按钮&lt;/x-button&gt; 
                &lt;x-button  type="warning"&gt;警告按钮&lt;/x-button&gt;   
            </demo-block>
        </demo-show>
        <div class="item">
            <h3 class="item-title">朴素按钮</h3>
            <x-button plain>默认按钮</x-button> 
            <x-button plain type="primary">常规按钮</x-button> 
            <x-button  plain type="danger">危险按钮</x-button> 
            <x-button  plain type="success">成功按钮</x-button> 
            <x-button  plain type="warning">警告按钮</x-button> 
        </div>
        <div class="item">
            <h3 class="item-title">圆润按钮</h3>
            <x-button round>默认按钮</x-button> 
            <x-button round type="primary">常规按钮</x-button> 
            <x-button round type="danger">危险按钮</x-button> 
            <x-button round type="success">成功按钮</x-button> 
            <x-button round type="warning">警告按钮</x-button> 
        </div>
        <div class="item">
            <h3 class="item-title">按钮尺寸</h3>
            <x-button size="large">超大按钮</x-button> 
            <x-button>默认按钮</x-button> 
            <x-button size="small">小按钮</x-button> 
            <x-button size="mini" type="primary">迷你按钮</x-button>  
        </div>
        <div class="item">
            <h3 class="item-title">禁用按钮</h3>
            <x-button disabled>默认按钮</x-button> 
            <x-button disabled type="primary">常规按钮</x-button> 
            <x-button disabled type="danger">危险按钮</x-button> 
            <x-button disabled type="success">成功按钮</x-button> 
            <x-button disabled type="warning">警告按钮</x-button> 
        </div>
        <div class="item">
            <h3 class="item-title">带图标的按钮</h3>
            <x-button icon="like_fill">默认按钮</x-button> 
            <x-button icon="enter" type="primary">常规按钮</x-button> 
            <x-button icon="search" size="mini" round  type="danger">危险按钮</x-button> 
            <x-button icon="setup" type="success">成功按钮</x-button> 
            <x-button icon="share" type="warning">警告按钮</x-button> 
        </div> 
        <div class="item">
            <h3 class="item-title">按钮组</h3>
            <div class="item">
                <x-button-group>
                    <x-button icon="return" type="primary" size="mini">前进</x-button>  
                    <x-button type="primary" size="mini">
                        后退
                        <i class="x-icon icon-enter"></i> 
                    </x-button> 
                </x-button-group>
            </div>
            <div class="item">
                <x-button-group>
                    <x-button icon="setup" type="success">成功按钮</x-button> 
                    <x-button type="primary">常规按钮</x-button> 
                    <x-button type="danger">危险按钮</x-button> 
                    <x-button icon="share" type="warning">警告按钮</x-button> 
                </x-button-group>
            </div>
            
        </div>
        <div class="item">
            <h3 class="item-title">只有图标的按钮</h3>
            <x-button icon="search" type="primary"></x-button>   
            <x-button icon="close" type="danger" size="mini"></x-button>      
        </div>
        <div class="item">
            <h3 class="item-title">文本按钮</h3>
            <x-button type="text">详情</x-button>       
        </div>
        <div class="item">
            <h3 class="item-title">加载中按钮</h3>
            <x-button type="primary" loading>加载中...</x-button>
        </div>
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
// import demoBlock from '@/components/demoBlock'
export default {
    components: {
        // demoBlock
    },
    data() {
        return { 
            attributesData: [
                {prop: 'size', description: '按钮大小', type: 'String', options: 'small/large/mini', default: '-'},
                {prop: 'type', description: '按钮类型', type: 'String', options: 'primary/danger/warning/success/text', default: '-'},
                {prop: 'icon', description: '按钮图标，从组件库提供的图标库中根据需求任意选择', type: 'String', options: '-', default: '-'},
                {prop: 'plain', description: '是否是朴素按钮', type: 'Boolean', options: 'true/false', default: 'false'},
                 {prop: 'disabled', description: '是否可用', type: 'Boolean', options: 'true/false', default: 'false'},
                 {prop: 'round', description: '是否是圆角按钮', type: 'Boolean', options: 'true/false', default: 'false'},
                 {prop: 'loading', description: '是否加载中状态', type: 'Boolean', options: 'true/false', default: 'false'},
                
            ]
        }
    }
}
</script> 
<style lang="less" scoped>
h3.item-title{
    padding: 15px 0;
}
.item{
    padding-left: 20px;
    margin-bottom: 20px;
}
</style>
