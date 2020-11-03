import Vue from 'vue'
import Router from 'vue-router' 
import routes from './config' 
Vue.use(Router)

const routesArrary = [];

routes.map((item) => {
  routesArrary.push({
    path: `/${item.path}`,
    name: item.name,
    component: resolve => require([`@/view/${item.path}.vue`], resolve)
  })
}) 

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes:[
    {
      path: '/',
      redirect: routesArrary[0].path
    },
    ...routesArrary]
})
