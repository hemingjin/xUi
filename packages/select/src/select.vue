<template>
    <div class="x-select">
        <x-input v-model="currentValue" 
            @focus="isExpend = true"
            @blur="isExpend = false" >
            <i slot="suffix"   
                class="x-icon icon-unfold" 
                :class="{'is-expend': isExpend}"></i>
        </x-input>
        <transition name="fade">
            <div class="x-option-group" v-show="isExpend"> 
                <slot></slot>
            </div>
        </transition>
    </div>
</template>
<script>
import XOption from './option.vue'
export default {
    name: 'xSelect',
    components: {
        XOption
    },
    props: {
        value: [String, Number]
    },
    provide() {
        return {
            select: this
        }
    },
    data() {
        return {
            currentValue: this.value,
            // 是否展开选择列表
            isExpend: false
        }
    },
    methods: { 
    }
}
</script>
