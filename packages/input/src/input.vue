<template>
    <div class="x-input"
        :class="[
            size ? `x-input-${size}`: '', 
            {
                'x-input-disabled': disabled,
                'x-input-group' : $slots.prepend || $slots.append,
                'x-input-group-prepend' : $slots.prepend,
                'x-input-group-append' :  $slots.append,
                'x-input-group-all' : $slots.prepend && $slots.append,
            }
        ]"
        :style="{'width': width + 'px'}">
        <div class="x-input-fix x-input-suffix" v-if="$slots.suffix"> 
            <slot name="suffix"></slot>
        </div>
        <div class="x-input-fix x-input-prevfix" v-if="$slots.prevfix"> 
            <slot name="prevfix"></slot>
        </div>
        <template  v-if="type !== 'textarea'">
            <!-- 前置元素 -->
            <div class="x-input_prepend" v-if="$slots.prepend">
                <slot name="prepend"></slot>
            </div>
            <input class="x-input-inner"
                :class="[ 
                    $slots.prevfix ? `x-input-prev-padding` : '',
                    $slots.suffix || (clearable && value) ? `x-input-suf-padding` : '',
                    type == 'password' ? `x-input-psd` : ''
                ]"
                :type="type" 
                autocomplete="off" 
                :value="value"
                @input="handleInput"
                @focus="handleFocus"
                @blur="handleBlur"
                @change="handleChange"
                :disabled="disabled"
                :placeholder="placeholder"/>
            <!-- 后置元素 -->
            <div class="x-input_append" v-if="$slots.append" ref="inputAppend">
                <slot name="append"></slot>
            </div>
        </template>
        <textarea class="x-input-inner x-input-inner_textarea"
            :value="value"
            @input="handleInput"
            @focus="handleFocus"
            @blur="handleBlur"
            @change="handleChange"
            :disabled="disabled"
            :placeholder="placeholder" 
            :cols="cols" 
            :rows="rows" v-else
            ></textarea>
        <i class="x-icon icon-delete_fill is-clearable" 
            v-if="clearable && value && type !=='textarea'"
            :style="{'right': appendWidth + 10 +'px'}"
            @click="handleClear"></i>
    </div>
</template>
<script>
export default {
    name: 'xInput',
    props: {
        // 输入框类型
        type: {
            type: String,
            default: 'text'
        },
        // 自定义宽度
        width: {
            type: [String, Number], 
        },
        // 输入框大小
        size: String,
        // 预显示内容
        placeholder: {
            type: String,
            default: '请输入内容'
        },
        // 输入框值
        value: [String, Number],
        // 是否可清空
        clearable: {
            type: Boolean,
            default: false
        },
        // 是否禁用
        disabled: {
            type: Boolean,
            default: false
        },
        // 多行文本框行数
        rows: {
            type: [String, Number],
            default: 2
        },
        // 多行文本框列数
        cols: {
            type: [String, Number],
            default: 20
        }
    },
    data() {
        return { 
            currentValue: this.value,
            // 是否获取焦点
            isFocus: false,
            // 后置元素的宽度，将在created()中计算出来
            appendWidth: 0
        }
    },
    created() {
        this.$nextTick(() => { 
            // 计算出后置元素的宽度，当存在后置元素&&输入框可清除时，计算图标的right值
            if(this.$refs.inputAppend){
                this.appendWidth = this.$refs.inputAppend.offsetWidth
            }
        }) 
    },
    methods: {
        // 监听输入框input事件
        handleInput(event) { 
            this.$emit('input', event.target.value)
        },
        // 监听输入框focus事件
        handleFocus(event) {
            this.isFocus = true
            this.$emit('focus', event)
        },
        // 监听输入框blue事件
        handleBlur(event) {
            this.isFocus = false
            this.$emit('blur', event) 
        },
        // 监听输入框内容变化事件
        handleChange(event) {
            this.$emit('change', event.target.value)
        },
        // 监听输入框清空事件
        handleClear() {
            this.currentValue = '';
            this.$emit('input', '')
        }
    }
}
</script>

