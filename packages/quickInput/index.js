import QuickInput from './src/quickInput'

QuickInput.install = function (Vue) {
  Vue.component(quickInput.name, QuickInput)
}

export default QuickInput