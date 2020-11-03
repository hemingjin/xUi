<template>
    <div class="x-check-list">
        <div class="x-checkbox" v-for="(item, index) in checkedValues" :key="index"> 
            <input type="checkbox" :value="item.value" :checked="item.checked" @change="onSelect(item)">
            <div class="x-checkbox-inner" :class="{'x-checkbox-checked': item.checked}" >
                <i class="x-icon icon-right" v-if="item.checked"></i>
            </div> 
            <span class="x-checkbox-content"> 
                {{item.label}}
            </span>
        </div>
    </div>
</template>
<script>
export default {
    name: 'xCheckList',
    props: {  
        // 当前选中的数据,数组对象属性要包含:label,value
        value: {
            type: Array,
            default: []
        },
        // 复选框数据源, 数组对象属性要包含:label,value
        source: {
            type: Array,
            default: []
        }
    }, 
    watch: {
        
    },
    computed: {
        checkedValues() {
            let sourceCopy = JSON.parse(JSON.stringify(this.source)); 
            sourceCopy.forEach((s, sIndex) => {
                this.value.forEach((v, vIndex) => {
                    if(s.value === v.value) {
                        s.checked = true
                    }
                })
            }) 
            return sourceCopy;
        }
    },
    created() { 
    },
    methods: {
        onSelect(data) {  
            this.$set(data, 'checked', data.checked ? false : true);  
            let result = this.checkedValues.filter((item) => { 
                return item.checked;
            }) 
            // 给父组件返回数据时，过滤掉checked属性
            result.forEach(item => {
                delete item.checked
            })
            this.$emit('input', result)
        }, 
    }
}
</script>

