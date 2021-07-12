/**!
 * entrance of router
 * 
 * Includes xxx
 * 
 * Copyright JS Foundation and other contributors
 * Copyright jiahwa(https://github.com/jiahwa)
 * @license MIT
 * 
 * Date: 2021-07-12 17:42
 */
import {MvvmRouter} from './src/mvvm-router'
import {Mvvm} from './src/Mvvm'

Mvvm.use(MvvmRouter)

const routes = [{ path: '/foo', component: '这是一行文本' }]

const router = new MvvmRouter({
    mode: 'hash'||'history',
    routes
})

const app = new Mvvm({
    router
}).$mount('#app')