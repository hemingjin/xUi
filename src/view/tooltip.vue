<template>
    <div class="page">
        <div class="page-title">{{pageTitle}}</div>
        <demo-show label="基本用法"> 
            <div class="demo">
                <div class="demo-item">
                    <x-tooltip content="呀哈哈，怎么说呢流水落花春去也，似曾相识燕归来。">
                        流水落花春去也，似曾相识燕归来。
                    </x-tooltip> 
                </div>
                <div class="demo-item">
                    <x-tooltip position="top" content="呀哈哈，流水落花春去也，似曾相识燕归来。流水落花春去也，似曾相识燕归来。怎么说呢流水落花春去也，似曾相识燕归来。">
                        流水落花春去也，似曾相识燕归来。
                    </x-tooltip> 
                </div>
                
                <div class="demo-item">
                    <x-tooltip position="left" content="呀哈哈，流水落花春去也，似曾相识燕归来。流水落花春去也，似曾相识燕归来。怎么说呢流水落花春去也，似曾相识燕归来。">
                        流水落花春去也，似曾相识燕归来。
                    </x-tooltip> 
                </div>
                <div class="demo-item">
                    <x-tooltip position="right" content="呀哈哈，流水落花春去也，似曾相识燕归来。流水落花春去也，似曾相识燕归来。怎么说呢流水落花春去也，似曾相识燕归来。">
                        流水落花春去也，似曾相识燕归来。
                    </x-tooltip> 
                </div>
            </div>
            <demo-block slot="code"> 
                &lt;x-tooltip content="呀哈哈，怎么说呢流水落花春去也，似曾相识燕归来。"&gt; 
                    流水落花春去也，似曾相识燕归来。
                &lt;/x-tooltip&gt;  
                &lt;x-tooltip position="top" content="呀哈哈，怎么说呢流水落花春去也，似曾相识燕归来。"&gt;
                    流水落花春去也，似曾相识燕归来。
                &lt;/x-tooltip&gt; 
                &lt;x-tooltip position="left" content="呀哈哈，怎么说呢流水落花春去也，似曾相识燕归来。"&gt;
                    流水落花春去也，似曾相识燕归来。
                &lt;/x-tooltip&gt;  
                &lt;x-tooltip position="right" content="呀哈哈，怎么说呢流水落花春去也，似曾相识燕归来。"&gt;
                    流水落花春去也，似曾相识燕归来。
                &lt;/x-tooltip&gt;   
            </demo-block>
        </demo-show>   
    </div>
</template>
<script>
export default { 
}
</script>
