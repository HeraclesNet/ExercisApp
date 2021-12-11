<template>
<div>
  <router-link to="/"></router-link>
  <router-view/>
</div>
</template>

<script>

export default {
  name: 'App',
  beforeCreate () {
    document.querySelector('html').setAttribute('style', 'background-image: url("full-shot-people-doing-lunges-red.jpg"); background-size: cover')
  },
  beforeDestroy () {
    document.querySelector('body').setAttribute('style', '')
  }
}
</script>

<style>
#app {
  font-family: 'TTOctosquares-Regular Regular';
  text-align: center;
  color: #fff;
  margin-top: 200px;
  font-size: 30px
  }
.container {
    margin: 20px;
}
</style>
