<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import "./common.js";
export default {
  name: "App"
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-clip: #f2f2f2;
}

body {
  background-color: #f5f5f5 !important;
}

</style>
