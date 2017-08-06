<template>
  <div class="container">2 + 1 = {{result}}</div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Try again',
      result: 2 + 1
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .container{
    text-align: center;
  }
</style>
