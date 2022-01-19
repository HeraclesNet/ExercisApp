<template>
  <form id ="RegisterForm">
    <md-field>
      <md-icon>emoji_people</md-icon>
      <label>Nombre de Usuario</label>
      <md-input v-model="name"></md-input>
    </md-field>
    <md-datepicker v-model="dateOfBirth">
      <label>Fecha de Nacimiento</label>
    </md-datepicker>
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
      <md-input v-model="password" type="password"></md-input>
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
  computed: {
    sesion () {
      return this.$store.state.sesion
    }
  },
  data () {
    return {
      email: null,
      password: null,
      name: null,
      nickName: null,
      dateOfBirth: null,
      token: null
    }
  },
  methods: {
    guardarInfo: function () {
      this.$store.state.sesion.token = this.token
      this.$store.state.sesion.email = this.email
      this.$store.state.sesion.name = this.name
      this.$store.state.sesion.nickName = this.nickName
      this.$store.state.sesion.dateOfBirth = this.dateOfBirth
    },
    crear: function (rt) {
      if (rt === 201) {
        this.$emit('aceptar', this.name)
        this.guardarInfo()
      } else {
        alert('Error en la petición. Intente nuevamente')
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
        this.token = response.data.token
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
