<template>
    
    <div class="page">
        <h2 class="page-title">{{pageTitle}}</h2>
        <demo-show label="基本标签"> 
            <div class="demo">
                <div class="demo-item"> 
                    <x-tag>默认标签</x-tag> 
                    <x-tag type="success">标签一</x-tag>
                    <x-tag type="warning">标签一</x-tag>
                    <x-tag type="danger">标签一</x-tag>
                </div>
                <div class="demo-item"> 
                    <x-tag closeable>标签一</x-tag> 
                    <x-tag type="success" closeable>标签一</x-tag>
                    <x-tag type="warning" closeable>标签一</x-tag>
                    <x-tag type="danger" closeable>标签一</x-tag>
                </div>
                <div class="demo-item"> 
                    <x-tag closeable>标签一</x-tag>  
                    <x-tag size="small" closeable>标签一</x-tag>  
                    <x-tag size="mini" closeable>标签一</x-tag>  
                </div>
                <div class="demo-item">  
                    <x-tag type="danger" closeable @click="tagClick" @close="tagClose">标签一</x-tag>
                </div>
            </div>
            <demo-block slot="code"> 
                &lt;div class="demo-item"&gt;  
                    &lt;x-tag&gt;默认标签&lt;/x-tag&gt;  
                    &lt;x-tag type="success"&gt;标签一&lt;/x-tag&gt; 
                    &lt;x-tag type="warning"&gt;标签一&lt;/x-tag&gt; 
                    &lt;x-tag type="danger"&gt;标签一&lt;/x-tag&gt; 
                &lt;/div&gt; 
                &lt;div class="demo-item"&gt; 
                    &lt;x-tag closeable&gt;标签一&lt;/x-tag&gt; 
                    &lt;x-tag type="success" closeable&gt;标签一&lt;/x-tag&gt; 
                    &lt;x-tag type="warning" closeable&gt;标签一&lt;/x-tag&gt; 
                    &lt;x-tag type="danger" closeable&gt;标签一&lt;/x-tag&gt; 
                &lt;/div&gt; 
                &lt;div class="demo-item"&gt;  
                    &lt;x-tag closeable&gt;标签一&lt;/x-tag&gt;   
                    &lt;x-tag size="small" closeable&gt;标签一&lt;/x-tag&gt;   
                    &lt;x-tag size="mini" closeable&gt;标签一&lt;/x-tag&gt;   
                &lt;/div&gt; 
                &lt;div class="demo-item"&gt;   
                    &lt;x-tag type="danger" closeable @click="tagClick" @close="tagClose"&gt;标签一&lt;/x-tag&gt; 
                &lt;/div&gt; 
            </demo-block>
        </demo-show>
    </div>
</template>
<script>
export default {
    methods: {
        tagClick() {

        },
        tagClose() {

        }
    }
}
</script>
