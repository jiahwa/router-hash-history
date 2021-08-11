/**!
 * entrance of router
 * 
 * Includes xxx
 * 
 * Copyright JS Foundation and other contributors
 * Copyright jiahwa(https://github.com/jiahwa)
 * @license MIT
 * 
 * Date: 2021-8-9
 */
import Util from './util'
import Hash from './hash'
import History from './history'


class VueRouter {
    constructor(options) {
        this.mode = options.mode || 'hash'; // {1}
        this.routes = options.routes || [];
        // utl.ListToMap => {'/home':Home, '/about':About}
        this.routesMap = Util.listToMap(this.routes, 'path', 'component'); // {2}
        // console.log(this.routesMap);//test
        // save current router
        this.history = null;

        this.init();
    }
    init() {
        let instance = null
        
        if(this.mode === 'hash') { // {3}
            instance = new Hash();
        }else {        
            instance = new History();
        }

        Object.defineProperty(this, 'history', { // {4}
            get(){
                return instance.history;
            },
            set(val){
                return val
            }
        })
        // setTimeout(() => {
        //     console.log(this.history)
        // }, 80);
        
    }
    go(){

    }
    back(){

    }
    push(){

    }
}
VueRouter.install = function(Vue, options){
    // console.log(Vue)
    // add this.$router, this.$route
    Vue.mixin({ // {5}
        beforeCreate() {
            // get root component(eg:main.js) instance
            if(this.$options && this.$options.router) {// {5}
                this._root = this; // current Vue instance mount on _root
                this._router = this.$options.router; // current router instance mount on _router

                // observer, defineRective(obj,key,value), 其中obj-目标对象, key-目标对象属性, value-属性值
                // 作用：监听this上的属性routeState，这里的routeState是我随便起的名字，如果routeState有改变则刷新视图，就会执行下面的{10}
                // 另外：这里有一点很重要! 那就是如果routeState为对象，那么vue会深度递归，劫持该对象下的所有属性
                Vue.util.defineReactive(this, 'routeState', this._router.history); // {6}
            }else {
                // traversal of vue component
                // which is process statement, attempt to execute if statement
                this._root = this.$parent._root;
            }
            // get component name
            Object.defineProperty(this, '$router', { // {7}
                get(){
                    return this._root._router;
                }
            })
            Object.defineProperty(this, '$route', { // {8}
                get(){
                    return {
                        // current route state
                        // current: this._root._router.history.current
                        // 这里的routeState是我随便起的名字，和上面{6}处同名
                        current: this._root.routeState.current // {6}
                    }
                }
            })
        }
    });
    // add router-link, router-view
    Vue.component('router-link',{ // {9}
        props: {
            to: String,
            tag: {
                type: String,
                default: 'a'
            }
        },
        render(h) {
            const mode = this._root._router.mode;
            const tag = this.tag;
            return h(tag,{'attrs':{ 'href': mode==='hash'?`#${this.to}`:this.to} }, this.$slots.default)
            // return <tag href={mode==='hash'?`#${this.to}`:this.to}>{this.$slots.default}</tag>
        }
    })
    // get by current route state 
    Vue.component('router-view',{ // {10}
        render(h) {
            const current = this._root._router.history.current;
            const routesMap = this._root._router.routesMap;
            return h(routesMap[current])
        }
    })
}
export default VueRouter
