<template>
  <form id ="LoginForm">
    <md-field>
      <md-icon>account_circle</md-icon>
      <label>Usuario</label>
      <md-input v-model="email"></md-input>
    </md-field>
    <md-field>
      <md-icon>password</md-icon>
      <label>Contraseña</label>
      <md-input v-model="password"></md-input>
    </md-field>
    <div id = "LoginButtons">
      <md-button :to="{name:'Registro'}" id="aceptar"  style="color:#FFFBF4">
        Crear cuenta
      </md-button>
      <md-button id="registrar" v-on:click="getData()" style="color:#FFFBF4">
        Iniciar Sesion
      </md-button>
    </div>
  </form>
</template>

<script>
import axios from 'axios'
export default {
  name: 'LoginBox',
  data () {
    return {
      email: null,
      password: null,
      confirmation: null
    }
  },
  methods: {
    getData: function () {
      const params = new URLSearchParams()
      params.append('email', this.email)
      params.append('password', this.password)
      axios.post('http://localhost:8081/login', params,
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }).then(response => {
        console.log(response.data)
      }).catch(e => {
        console.log(e)
      })
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans&family=Road+Rage&display=swap');
.md-button {
  margin: 1rem auto;
  border: 0;
  font-family: 'TTOctosquares-Regular Regular';
}

#LoginForm {
    background-color: #FFFBF4;
    border-radius: 0.5rem;
    padding: 16px;
    width: 15rem;
    bottom: 0px;
    margin-left:auto;
    margin-right:auto;
}

#LoginButtons #aceptar {
  background-color: #ee2d2b;
}

#LoginButtons #registrar {
  background-color: #bf202c;
}
</style>
