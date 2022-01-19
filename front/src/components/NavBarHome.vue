<template>
  <div class="container">
    <md-toolbar>
      <h3 class="md-title" style="flex: 1"><a href="default.aspx"><picture>
    <source media="(min-width: 900px)" srcset="../assets/Appxercise-01.svg">
    <source media="(min-width: 480px)" srcset="../assets/Appxercise-02.svg 250w">
    <img src="../assets/Appxercise-04.png" width="250px" alt="Appxercise">
</picture>
</a></h3>
<<<<<<< HEAD
        <md-avatar>
          <md-button class="md-icon-button">
            <img src="../assets/Appxercise-04.png">
          </md-button>
        </md-avatar>
      <md-button :to="{name:'Feed'}" style="color:#ee2d2b"> Pagina principal </md-button>
      <md-button :to="{name:'User'}" style="color:#ee2d2b"> Usuario </md-button>
=======
      <md-button :to="{name:'User'}" style="color:#ee2d2b;"> Usuario <i class="material-icons" style="vertical-align:middle">person</i> </md-button>
>>>>>>> e677684c3a40bd0dbaac829db6a71975e7fc301e
      <md-button :to="{name:'Home'}" style="color:#ee2d2b" v-on:click="DesecharInfo()"> Salir Cuenta <i class="material-icons" style="vertical-align:middle">logout</i></md-button>
    </md-toolbar>
  </div>
</template>

<script>
export default {
  name: 'NavBarHome',
  computed: {
    sesion () {
      return this.$store.state.sesion
    }
  },
  methods: {
    DesecharInfo: function () {
      this.$store.state.sesion.token = null
      this.$store.state.sesion.email = null
      this.$store.state.sesion.name = null
      this.$store.state.sesion.nickName = null
      this.$store.state.sesion.dateOfBirth = null
      this.$store.state.sesion.weight = null
      this.$store.state.sesion.height = null
      this.$store.state.sesion.gender = null
      this.$store.state.sesion.refreshtoken = null
    }
  }
}
</script>

<style>
.container {
  font-family: 'TTOctosquares-Regular Regular';
  font-size: 30px
}
</style>
