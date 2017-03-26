<template>
  <div id="app">
    <img src="./assets/logo279486.png" class="vlogo">
    <slidHtml></slidHtml>
    <router-view></router-view>
    <footHtml></footHtml>
    <navBar></navBar>
  </div>
</template>
<script>
import slidHtml from './components/slidHtml'
import footHtml from './components/footHtml'
import navBar from './components/navBar'
// import modal from 'vue-strap/src/Modal.vue'
// import select from 'vue-strap/src/Select.vue'
export default {
  name: 'app',
  components: {
    slidHtml,
    footHtml,
    navBar
  }
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.vlogo{position: absolute;top:20px;left: 20px;}
</style>
