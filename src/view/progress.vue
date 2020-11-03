<template>
    
    <div class="page">
        <h2 class="page-title">{{pageTitle}}</h2>
        <demo-show label="基础进度条"> 
            <div class="demo">
                <div class="demo-item"> 
                    <div class="title">粗细样式</div>
                    <x-progress :percent="20"></x-progress>
                    <x-progress :percent="80" size="thin"></x-progress>
                    <x-progress :percent="100" size="large"></x-progress>
                </div>
                <div class="demo-item"> 
                    <div class="title">颜色样式</div>
                    <x-progress :percent="20.66" type="error"></x-progress>
                    <x-progress :percent="80" size="thin" type="warning"></x-progress>
                    <x-progress :percent="50" size="large" type="success" :showText="false"></x-progress>
                    <x-progress :percent="20" color="#333"></x-progress>
                    <x-progress :percent="60" color="rgba(0, 0, 100)"></x-progress>
                </div>
                <div class="demo-item"> 
                    <div class="title">带有动画的进度条</div> 
                    <x-progress :percent="50" animate size="large" type="success"></x-progress> 
                </div>
            </div>
            <demo-block slot="code"> 
                &lt;div class="demo-item"&gt;  
                    &lt;div class="title"&gt;粗细样式&lt;/div&gt; 
                    &lt;x-progress :percent="20"&gt;&lt;/x-progress&gt; 
                    &lt;x-progress :percent="80" size="thin"&gt;&lt;/x-progress&gt; 
                    &lt;x-progress :percent="100" size="large"&gt;&lt;/x-progress&gt; 
                &lt;/div&gt; 

                &lt;div class="demo-item"&gt;  
                    &lt;div class="title"&gt;颜色样式&lt;/div&gt; 
                    &lt;x-progress :percent="20.66" type="error"&gt;&lt;/x-progress&gt; 
                    &lt;x-progress :percent="80" size="thin" type="warning"&gt;&lt;/x-progress&gt; 
                    &lt;x-progress :percent="50" size="large" type="success" :showText="false"&gt;&lt;/x-progress&gt; 
                    &lt;x-progress :percent="20" color="#333"&gt;&lt;/x-progress&gt; 
                    &lt;x-progress :percent="60" color="rgba(0, 0, 100)"&gt;&lt;/x-progress&gt; 
                &lt;/div&gt; 
                
                &lt;div class="demo-item"&gt;  
                    &lt;div class="title"&gt;带有动画的进度条&lt;/div&gt;  
                    &lt;x-progress :percent="50" animate size="large" type="success"&gt;&lt;/x-progress&gt;  
                &lt;/div&gt;  
            </demo-block>
        </demo-show>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="less" scoped>
.demo-item{
    width: 50%;
}
</style>

