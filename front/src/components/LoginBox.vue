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
      <button id="aceptar">
        Crear cuenta
      </button>
      <button id="registrar" v-on:click="getData()">
        Iniciar Sesion
      </button>
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
      const userlogin = { email: this.email, password: this.password }
      axios.post('http://localhost:8081/login', userlogin).then(response => {
        console.log(response.status)
      }).catch(e => {
      })
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans&family=Road+Rage&display=swap');
button {
  display:block;
  margin: 1rem auto;
  padding: 0.7rem 3rem;
  border-radius: 0.3rem;
  border: 0;
  color: #FFFBF4;
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
