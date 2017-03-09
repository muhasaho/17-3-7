<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  html, body{
    height: 100%;
    margin: 0;
  }

  body{
    background: #1C2432;
    color: white;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
  }
</style>
