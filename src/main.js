// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueHighlightJS from 'vue-highlightjs'
import 'highlight.js/styles/atom-one-dark-reasonable.css'
import XUI from '../packages/index'  
import '../packages/theme-default/src/index.less'
import '../src/assets/example.less'
import 'remixicon/fonts/remixicon.css'
import {baseMixin} from '../src/mixins'
import demoBlock from '../src/components/demoBlock'
import demoShow from '../src/components/demoShow'
import utils from '../src/utils/utils'  

Vue.config.productionTip = false 

Vue.use(XUI)
Vue.use(VueHighlightJS)
Vue.mixin(baseMixin)
Vue.component('demoShow', demoShow)
Vue.component('demoBlock', demoBlock)
Vue.prototype.$utils = utils

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
