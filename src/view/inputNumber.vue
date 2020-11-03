<template>
    <div class="page">
        <div class="page-title">{{pageTitle}} <i class="tip-fixed">to FIXED (2019/5/29 18:00)</i></div>
        <demo-show label="基本用法"> 
            <div class="demo">
                <x-input-number is-disabled></x-input-number>
                <x-input-number :defaultValue="number2" :step="10" @change="handleNumberChange"></x-input-number>
            </div>
            <demo-block slot="code">
                &lt;x-input-number is-disabled&gt;&lt;/x-input-number&gt;
                &lt;x-input-number :defaultValue="number2" :step="10" @change="handleNumberChange"&gt;&lt;/x-input-number&gt;
            </demo-block>
        </demo-show>
    </div>
</template>
<script>
export default {
    data() {
        return {
            number: 0,
            number2: 2
        }
    },
    methods: {
        handleNumberChange(data) {
            console.log(data, `执行方法`)
        }
    }
}
</script>
