<template>
  <form id ="RegisterForm">
    <md-field>
      <md-icon>emoji_people</md-icon>
      <label>Nombre de Usuario</label>
      <md-input v-model="name"></md-input>
    </md-field>
    <md-field>
      <md-icon>date_range</md-icon>
      <label>Fecha de nacimiento</label>
      <md-input v-model="dateOfBirth"></md-input>
    </md-field>
    <md-field>
      <md-icon>face</md-icon>
      <label>Sobrenombre</label>
      <md-input v-model="nickName"></md-input>
    </md-field>
    <md-field>
      <md-icon>mail</md-icon>
      <label>Email</label>
      <md-input v-model="email"></md-input>
    </md-field>
    <md-field>
      <md-icon>password</md-icon>
      <label>Contraseña</label>
      <md-input v-model="password"></md-input>
    </md-field>
    <div id = "RegisterButtons">
      <md-button id="Create" v-on:click="getData()" style="color:#FFFBF4">
        Crear Cuenta
      </md-button>
      <md-button :to="{name:'Inicio'}" id="aceptar"  style="color:#FFFBF4">
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
      name: null,
      nickName: null,
      dateOfBirth: null
    }
  },
  methods: {
    crear: function (rt) {
      if (rt === 203) {
        this.$emit('aceptar', true)
      } else {
        if (rt === 404) {
          return false
        }
      }
    },
    getData: function () {
      const userlogin = { email: this.email, password: this.password, name: this.name, dateOfBirth: this.dateOfBirth, nickName: this.nickName }
      axios.post('http://localhost:8081/home/register',
        userlogin, {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
          }
        }).then(response => {
        console.log(response.status)
        this.crear(response.status)
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

#RegisterForm {
    background-color: #FFFBF4;
    border-radius: 0.5rem;
    padding: 16px;
    width: 25rem;
    bottom: 0px;
    margin-left:auto;
    margin-right:auto;
    text-align: center
}

#RegisterButtons{
  display: block;
}

#RegisterButtons #Create {
  background-color: #bf202c;
  margin-left:25px;
  float: left;
}
#RegisterButtons #aceptar {
  background-color: #1d85cd;
}
</style>
