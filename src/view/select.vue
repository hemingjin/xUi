<template>
    <div class="page">
        <div class="page-title">{{pageTitle}} <i class="tip-fixed">to FIXED (2019/5/22 17:00)</i></div>
        <demo-show label="基本用法"> 
            <div class="demo">
                <x-select v-model="currentValue">
                    <x-option v-for="item in optionList"
                        :key="item.id"
                        :label="item.name"
                        :value="item.id"
                    ></x-option>
                </x-select>
                {{currentValue}}
            </div>
            <demo-block slot="code"></demo-block>
        </demo-show>
    </div>
</template>
<script>
export default {
    data() {
        return {
            currentValue: 1,
            optionList: [
                {id: 1, name: '苹果'},
                {id: 2, name: '香蕉'},
                {id: 3, name: '芒果'},
            ]
        }
    }
}
</script>
