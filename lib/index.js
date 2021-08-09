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
        this.mode = options.mode || 'hash';
        this.routes = options.routes || [];
        // utl.ListToMap => {'/home':Home, '/about':About}
        this.routesMap = Util.listToMap(this.routes, 'path', 'component');
        // console.log(this.routesMap);//test
        // save current router
        this.history = null;

        this.init();
    }
    init() {
        let instance = null
        Object.defineProperty(this, 'history', {
            get(){
                return instance.history;
            },
            set(val){
                return val
            }
        })
        
        if(this.mode === 'hash') {
            instance = new Hash();
        }else {
            
            instance = new History();
        }
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
    Vue.mixin({
        beforeCreate() {
            // get root component(eg:main.js) instance
            if(this.$options && this.$options.router) {
                this._root = this; // current Vue instance mount on _root
                this._router = this.$options.router; // current router instance mount on _router

                // observer
                Vue.util.defineReactive(this, 'routeState', this._router.history)
            }else {
                // traversal of vue component
                // which is process statement, attempt to execute if statement
                this._root = this.$parent._root;
            }
            // get component name
            Object.defineProperty(this, '$router', {
                get(){
                    return this._root._router;
                }
            })
            Object.defineProperty(this, '$route', {
                get(){
                    return {
                        // current route state
                        // current: this._root._router.history.current
                        current: this._root.routeState.current
                    }
                }
            })
        }
    });
    // add router-link, router-view
    Vue.component('router-link',{
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
            // return h('a',{'href': mode==='hash'?`#${this.to}`:this.to}, this.$slots.default)
            // issues#1: href attribute doesn't work
            return <tag href={mode==='hash'?`#${this.to}`:this.to}>{this.$slots.default}</tag>
        }
    })
    // get by current route state 
    Vue.component('router-view',{
        render(h) {
            const current = this._root._router.history.current;
            const routesMap = this._root._router.routesMap;
            return h(routesMap[current])
        }
    })
}
export default VueRouter
