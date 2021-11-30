<template>
<div>
  <div class="container">
    <md-toolbar>
      <h3 class="md-title" style="flex: 1"><a href="default.aspx"><img src=".\assets\Appxercise-01.png"></a></h3>
      <md-button :to="{name:'Registro'}" style="color:#ee2d2b">Registro <i class="material-icons" style="vertical-align:middle">dashboard</i></md-button>
      <md-button :to="{name:'Inicio'}" style="color:#ee2d2b">Ingresar <i class="material-icons" style="vertical-align:middle">login</i></md-button>
    </md-toolbar>
  </div>
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
