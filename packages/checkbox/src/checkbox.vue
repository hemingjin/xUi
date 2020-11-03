<template>
    <div class="x-checkbox"> 
        <input type="checkbox" 
            :value="currentValue" 
            @change="handleChange" >
        <div class="x-checkbox-inner" 
            :class="{'x-checkbox-checked': currentValue}">
            <i class="x-icon icon-right" v-if="currentValue"></i>
        </div> 
        <span class="x-checkbox-content"> 
            <slot></slot>
        </span>
    </div>
</template>
<script>
export default {
    name: 'xCheckbox',
    props: {
        value: {
            type: [String, Number, Boolean],
            default: false
        }
    },
    data() {
        return {
            currentValue: this.value
        }
    },
    computed: {
        isGroup() {
            let parent = this.$parent; 
            while(parent) {
                if(parent.$options.componentName !== 'xCheckboxGroup') {
                    parent = parent.$parent
                }else {
                    return true;
                }
            }
            return false;
        }
    },
    created() {
        console.log(this.$parent.$options.componentName)
    },
    methods: {
        handleChange(event) {  
            let checked = event.target.checked;
            if(checked) {
                this.currentValue = false
            } else {
                this.currentValue = true;
            } 
        }
    }
}
</script>

