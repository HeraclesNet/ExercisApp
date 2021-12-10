<template>
  <div class="container">
    <md-toolbar>
      <h3 class="md-title" style="flex: 1"><a><img src="../assets/Appxercise-01.png"></a></h3>
      <!-- <h3 class="md-title" style="flex: 1"><a href="default.aspx"><img src=".\assets\Appxercise-01.png"></a></h3> -->
      <md-badge class="md-primary" md-content="1">
        <md-avatar>
          <md-button class="md-icon-button">
            <img src="../assets/Appxercise-04.png">
          </md-button>
        </md-avatar>
      </md-badge>
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
  color: #fff;
  font-size: 30px
}
</style>
