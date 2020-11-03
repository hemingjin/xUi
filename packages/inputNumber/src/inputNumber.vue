<template> 
        <x-input class="x-input-number" 
            :style="{'width': width + 'px'}" 
            v-model="currentValue" 
            @input="handleNumberChange" 
            @change="handleNumberChange"
            :disabled="isDisabled"
            ref="inputNumber"> 
            <i slot="prepend" class="x-icon icon-add" @click="handleMinus "></i>
            <i slot="append" class="x-icon icon-add" @click="handlePlus"></i> 
        </x-input> 
</template>
<script>
import regexp from '../../utils/regexp'

export default {
    name: 'xInputNumber',
    props: {
        width: {
            type: Number,
            default: 180
        },
        // 初始默认值
        defaultValue: {
            type :Number,
            default: 0
        },
        // 增加、减少幅度
        step: {
            type: Number,
            default: 1
        },
        // 允许输入最大值
        max: {
            type: Number,
            default: 1000
        },
        // 允许输入最小值
        min: {
            type: Number,
            default: 0
        },
        // 是否不可输入
        isDisabled: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            currentValue: this.defaultValue
        }
    },
    created() { 
    },
    watch: {
        currentValue(to, from) { 
            if(to < this.min) {
                this.currentValue = this.min
            }
            if(to > this.max) {
                this.currentValue = this.max
            }   
            this.$emit('change', this.currentValue) 
        }
    },
    methods: { 
        // 监听input/change事件
        handleNumberChange(e) { 
            this.currentValue = parseInt(value);
            if(!regexp.isNumber.test(this.currentValue)) {
                this.currentValue = 0
            }
        }, 
        // 监听minus事件
        handleMinus () {
            if(this.currentValue > this.min) {
                this.currentValue -= this.step
            } else {
                this.currentValue = this.min; 
            }  
        },
        // 监听add事件
        handlePlus() {   
            if(this.currentValue < this.max) {
                this.currentValue += this.step
            } else {
                this.currentValue = this.max; 
            }   
        }
    }
}
</script>
