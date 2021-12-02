<template>
  <form id ="LoginForm">
    <md-field>
      <md-icon>emoji_people</md-icon>
      <label>Nombre de Usuario</label>
      <md-input v-model="nameu"></md-input>
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
    <div id = "LoginButtons">
      <button id="Create" v-on:click="getData()">
        Crear Cuenta
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
      nameu: null,
      nickname: null,
      dateOfBirth: null,
      confirmation: null
    }
  },
  methods: {
    getData: function () {
      const userlogin = { email: this.email, password: this.password, name: this.name, dateOfBirth: this.dateOfBirth, nickname: this.nickname }
      axios.post('http://localhost:8081/login', userlogin).then(response => {
        console.log(response.status)
      }).catch(e => {
        console.log(e)
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

#LoginButtons #Create {
  background-color: #bf202c;
}
</style>
