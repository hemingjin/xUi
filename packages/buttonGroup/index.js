import ButtonGroup from './src/buttonGroup.vue'

ButtonGroup.install = function(Vue) {
    Vue.component(ButtonGroup.name, ButtonGroup);
};

export default ButtonGroup;