# vue-router
路由实现了以下；

路由：两种模式 hash & history

router-link router-view

this.\$router 全局路由实例 this.\$route 当前路由实例

Vue插件的注册方法

未实现的：导航守卫 beforEach, afterEach, beforeEnter, 组件内守卫 beforeRouteEnter, beforeRouteUpdate, beforeRouteLeave

## 完整的导航解析流程
```log
导航被触发。
在失活的组件里调用 beforeRouteLeave 守卫。
调用全局的 beforeEach 守卫。
在重用的组件里调用 beforeRouteUpdate 守卫 (2.2+)。
在路由配置里调用 beforeEnter。
解析异步路由组件。
在被激活的组件里调用 beforeRouteEnter。
调用全局的 beforeResolve 守卫 (2.5+)。
导航被确认。
调用全局的 afterEach 钩子。
触发 DOM 更新。
调用 beforeRouteEnter 守卫中传给 next 的回调函数，创建好的组件实例会作为回调函数的参数传入。
```
