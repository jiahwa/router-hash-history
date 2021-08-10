<template>
  <div id="app">
    Hello, world!
    <br>
    <router-link to="/home">home</router-link>&nbsp;&nbsp;
    <router-link to="/about">about</router-link> <!-- {1} -->
    <!-- router-view 全局组件 -->
    <router-view></router-view> <!-- {2} -->
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
