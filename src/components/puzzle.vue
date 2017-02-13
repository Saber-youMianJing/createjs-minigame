<template>
  <div class="puzzle">

  </div>
</template>

<script>
export default {
  name: 'puzzle',
  data () {
    return {
      clientHeight: document.documentElement.clientHeight/document.documentElement.clientWidth*750
    }
  },
  mounted(){

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .puzzle{
    position: absolute;
    width: 100%;
    height: 100vh;
    background: url('../assets/img/puzzle/puzzle-bg.jpg');
    background-size: 100% 100%;
  }
</style>
