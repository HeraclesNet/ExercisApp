<template>
  <div class="container">
    <md-toolbar>
      <h3 class="md-title" style="flex: 1"><a href="default.aspx"><img src="../assets/Appxercise-01.png"></a></h3>
      <!-- <h3 class="md-title" style="flex: 1"><a href="default.aspx"><img src=".\assets\Appxercise-01.png"></a></h3> -->
      <md-button v-if="true" style="color:#ee2d2b">Perfil <i class="material-icons" style="vertical-align:middle">account_circle</i></md-button>
      <md-button v-if="true" style="color:#ee2d2b">Salir Cuenta <i class="material-icons" style="vertical-align:middle">loginout</i></md-button>
    </md-toolbar>
  </div>
</template>
<style>
.container {
    margin: 20px;
}
</style>
