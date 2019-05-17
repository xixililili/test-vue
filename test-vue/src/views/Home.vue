<template>
  <div class="home">
    <Nav img="../../static/imgs/att33.png"></Nav>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div class="back"></div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Nav from '@/components/Nav.vue'

export default {
  name: 'home',
  components: {
    // HelloWorld,
    Nav
  }
}
</script>

<style>
.back{
  width: 100px;
  height: 100px;
  /* background: url('~imgs/att33.png') */
}
</style>

