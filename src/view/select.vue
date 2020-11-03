<template>
    <div class="page">
        <div class="page-title">{{pageTitle}} <i class="tip-fixed">to FIXED (2019/5/22 17:00)</i></div>
        <demo-show label="基本用法"> 
            <div class="demo">
                <x-select v-model="currentValue" :data="optionList"> 
                </x-select>
                {{currentValue}}
                <x-select v-model="currentValue2" :data="optionList2"> 
                </x-select>
                {{currentValue2}}
            </div>
            <demo-block slot="code"></demo-block>
        </demo-show>
    </div>
</template>
<script>
export default {
    data() {
        return {
            currentValue: '苹果',
            optionList: ['苹果', '香蕉', '芒果'],
            currentValue2: '苹果2',
            optionList2: ['苹果2', '香蕉2', '芒果2'],
        }
    }
}
</script>
