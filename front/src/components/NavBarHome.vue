<template>
  <div class="container">
    <md-toolbar>
      <h3 class="md-title" style="flex: 1"><a href="default.aspx"><picture>
    <source media="(min-width: 900px)" srcset="../assets/Appxercise-01.svg">
    <source media="(min-width: 480px)" srcset="../assets/Appxercise-02.svg 250w">
    <img src="../assets/Appxercise-04.png" width="250px" alt="Appxercise">
</picture>
</a></h3>
        <md-avatar>
          <md-button class="md-icon-button">
            <img src="../assets/Appxercise-04.png">
          </md-button>
        </md-avatar>
        <!-- Faltan las opciones -->
      <md-button :to="{name:'Profile'}" style="color:#ee2d2b">Perfil </md-button>
      <md-button :to="{name:'User'}" style="color:#ee2d2b">Usuario </md-button>
      <md-button style="color:#ee2d2b">Salir Cuenta <i class="material-icons" style="vertical-align:middle">logout</i></md-button>
    </md-toolbar>
  </div>
</template>

<script>
export default {
  name: 'NavBarHome'
}
</script>

<style>
.container {
  font-family: 'TTOctosquares-Regular Regular';
  font-size: 30px
}
</style>
