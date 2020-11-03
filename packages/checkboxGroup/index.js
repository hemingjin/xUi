import CheckGroup from '../checkbox/src/checkboxGroup.vue'

CheckGroup.install = function(Vue) {
    Vue.component(CheckGroup.name, CheckGroup);
}

export default CheckGroup