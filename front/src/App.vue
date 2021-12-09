<template>
<div>
  <router-link to="/"></router-link>
  <router-view/>
</div>
</template>

<script>

export default {
  name: 'App'
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
