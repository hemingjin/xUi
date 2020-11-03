<template>
    <div class="page">
        <div class="page-title">{{pageTitle}} <i class="tip-completed">completed (2019/5/22 14:00)</i></div>
        <demo-show label="基本用法"> 
            <div class="demo">
                <div class="demo-item">输入框的值: {{data}}</div>
                <div class="demo-item">
                    <div class="title">基本样式</div>
                    <x-input v-model="data"></x-input>
                    <x-input type="password"></x-input>
                </div> 
                <div class="demo-item">
                    <div class="title">自定义宽度</div>
                    <x-input v-model="data" width="240"></x-input>
                </div>
                <div class="demo-item">
                    <div class="title">可清空</div>
                    <x-input v-model="data" width="240" clearable></x-input>
                </div>
                <div class="demo-item">
                    <div class="title">禁用样式</div>
                    <x-input v-model="data" width="240" disabled></x-input>
                </div>
                <div class="demo-item">
                    <div class="title">small样式</div>
                    <x-input size="small" v-model="data" width="240" clearable></x-input>
                </div>
                <div class="demo-item">
                    <div class="title">多行文本框</div>
                    <x-input type="textarea" rows="5" v-model="data" width="640"></x-input>
                </div>
            </div>
            <demo-block slot="code">
                &lt;div class="title"&gt;基本样式&lt;/div&gt; 
                &lt;x-input v-model="data"&gt;&lt;/x-input&gt;
                &lt;x-input type="password"&gt;&lt;/x-input&gt; 

                &lt;div class="title"&gt;自定义宽度&lt;/div&gt;
                &lt;x-input v-model="data" width="240"&gt;&lt;/x-input&gt; 

                &lt;div class="title"&gt;可清空&lt;/div&gt;
                &lt;x-input v-model="data" width="240" clearable&gt;&lt;/x-input&gt; 
                &lt;x-input v-model="data" width="240" disabled&gt;&lt;/x-input&gt;

                &lt;div class="title"&gt;small样式&lt;/div&gt;
                &lt;x-input size="small" v-model="data" width="240" clearable&gt;&lt;/x-input&gt;
                    
                &lt;div class="title"&gt;多行文本框&lt;/div&gt;
                &lt;x-input type="textarea" rows="5" v-model="data" width="640"&gt;&lt;/x-input&gt;
            </demo-block>
        </demo-show>
        <demo-show label="高级用法"> 
            <div class="demo">
                <div class="demo-item">
                    <div class="title">带有前缀图标和后缀图标的输入框</div>
                    <x-input v-model="data" width="240" placeholder="请输入搜索关键词">
                        <i slot="prevfix" class="x-icon icon-search"></i>
                    </x-input>
                    <x-input v-model="data" width="240" placeholder="请输入搜索关键词">
                        <i slot="suffix" class="x-icon icon-search"></i>
                    </x-input>
                    <x-input v-model="data" width="240" placeholder="请输入搜索关键词">
                        <i slot="suffix" class="x-icon icon-picture_fill"></i>
                    </x-input>
                </div>
            </div>
            <demo-block slot="code">
                &lt;div class="title"&gt;带有前缀图标和后缀图标的输入框&lt;/div&gt;
                &lt;x-input v-model="data" width="240" placeholder="请输入搜索关键词"&gt;
                    &lt;i slot="prevfix" class="x-icon icon-search"&gt;&lt;/i&gt;
                &lt;/x-input&gt;
                &lt;x-input v-model="data" width="240" placeholder="请输入搜索关键词"&gt;
                    &lt;i slot="suffix" class="x-icon icon-search"&gt;&lt;/i&gt;
                &lt;/x-input&gt;
                &lt;x-input v-model="data" width="240" placeholder="请输入搜索关键词"&gt;
                    &lt;i slot="suffix" class="x-icon icon-picture_fill"&gt;&lt;/i&gt;
                &lt;/x-input&gt; 
            </demo-block>
        </demo-show>
        <demo-show label="组合输入框用法"> 
            <div class="demo">
                <div class="demo-item">
                    <div class="title">组合框</div>
                    <x-input v-model="data" clearable style="margin-bottom: 20px">
                        <template slot="prepend">http://</template>
                    </x-input>
                    <x-input v-model="data" clearable style="margin-bottom: 20px">
                        <template slot="append">百度一下</template>
                    </x-input>
                    <x-input v-model="data" clearable width="400" style="margin-bottom: 20px">
                        <template slot="prepend">http://</template>
                        <template slot="append">百度一下</template>
                    </x-input>
                    <x-input v-model="data" clearable width="400"> 
                        <i class="x-icon icon-search" slot="append"></i>
                    </x-input>
                    <x-input v-model="data" clearable width="400" disabled> 
                        <x-button slot="append" type="text" icon="search">搜索</x-button>
                    </x-input> 
                </div> 
            </div>
            <demo-block slot="code"> 
                &lt;div class="title"&gt;组合框&lt;/div&gt;
                &lt;x-input v-model="data" clearable style="margin-bottom: 20px"&gt;
                    &lt;template slot="prepend"&gt;http://&lt;/template&gt;
                &lt;/x-input&gt;
                &lt;x-input v-model="data" clearable style="margin-bottom: 20px"&gt;                        
                    &lt;template slot="append"&gt;百度一下&lt;/template&gt;
                &lt;/x-input&gt;
                &lt;x-input v-model="data" clearable width="400" style="margin-bottom: 20px"&gt;
                    &lt;template slot="prepend"&gt;http://&lt;/template&gt;
                    &lt;template slot="append"&gt;百度一下&lt;/template&gt;
                &lt;/x-input&gt;
                &lt;x-input v-model="data" clearable width="400"&gt; 
                    &lt;i class="x-icon icon-search" slot="append"&gt;&lt;/i&gt;
                &lt;/x-input&gt;
                &lt;x-input v-model="data" clearable width="400"&gt; 
                    &lt;x-button slot="append" type="text" icon="search"&gt;搜索&lt;/x-button&gt;
                &lt;/x-input&gt;   
            </demo-block>
        </demo-show>
    </div>
</template>
<script>
export default {
    data() {
        return {
            data: ''
        }
    }
}
</script>

