import Vue from 'vue'
// 导入自定义vueRouter实现
import vueRouter from '../../lib' // {1}
// import vueRouter from 'vue-router' // {1}
import routes from './routes' // {2}
// use vueRouter
Vue.use(vueRouter) // {3}

export default new vueRouter({ // {4}
    mode: 'history',
    routes
})