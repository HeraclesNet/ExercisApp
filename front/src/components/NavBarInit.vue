<template>
  <div class="container">
    <md-toolbar>
      <h3 class="md-title" style="flex: 1"><a href="default.aspx"><picture>
    <source media="(min-width: 900px)" srcset="../assets/Appxercise-01.svg">
    <source media="(min-width: 480px)" srcset="../assets/Appxercise-02.svg 250w">
    <img src="../assets/Appxercise-04.png" width="250px" alt="Appxercise">
</picture>
</a></h3>
      <!-- <h3 class="md-title" style="flex: 1"><a href="default.aspx"><img src=".\assets\Appxercise-01.png"></a></h3> -->
      <md-button :to="{name:'Registro'}" style="color:#ee2d2b">Registro <i class="material-icons" style="vertical-align:middle">dashboard</i></md-button>
      <md-button :to="{name:'Inicio'}" style="color:#ee2d2b">Ingresar <i class="material-icons" style="vertical-align:middle">login</i></md-button>
    </md-toolbar>
  </div>
</template>

<script>
export default {
  name: 'NavBarInit'
}
</script>

<style>
.container{
  font-family: 'TTOctosquares-Regular Regular';
  color: #fff;
  font-size: 30px
}
</style>
