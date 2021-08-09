import Vue from 'vue'
// 导入自定义vueRouter实现
import vueRouter from '../../lib'
// import vueRouter from 'vue-router'
import routes from './routes'
// use vueRouter
Vue.use(vueRouter)

export default new vueRouter({
    mode: 'history',
    routes
})