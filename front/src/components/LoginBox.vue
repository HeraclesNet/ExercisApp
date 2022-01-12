<template>
  <form id ="LoginForm">
    <div id="warning" v-if="confirmation">
      <p>USUARIO y/o CONTRASEÑA INCORRECTA!</p>
    </div>
    <div id="warning" v-if="existe">
      <p>USUARIO NO EXISTE</p>
    </div>
    <md-field md-clearable>
      <md-icon>account_circle</md-icon>
      <label>Usuario</label>
      <md-input v-model="email"></md-input>
    </md-field>
    <md-field>
      <md-icon>password</md-icon>
      <label>Contraseña</label>
      <md-input v-model="password" type="password"></md-input>
    </md-field>
    <div id = "LoginButtons">
      <md-button id="registrar" v-on:click="ingresar(200)" style="color:#FFFBF4">
        Iniciar Sesion
      </md-button>
      <md-button :to="{name:'Registro'}" id="aceptar"  style="color:#FFFBF4">
        Crear cuenta
      </md-button>
    </div>
  </form>
</template>

<script>
import axios from 'axios'
export default {
  name: 'LoginBox',
  beforeCreate () {
    document.querySelector('html').setAttribute('style', 'background-image: url("full-shot-people-doing-lunges-red-alt.jpg"); background-size: cover')
  },
  beforeDestroy () {
    document.querySelector('body').setAttribute('style', '')
  },
  computed: {
    sesion () {
      return this.$store.state.sesion
    }
  },
  data () {
    return {
      email: null,
      password: null,
      confirmation: false,
      existe: false,
      // info usuario
      realemail: null,
      token: null,
      name: null,
      nickName: null,
      visibilidad: null,
      dateOfBirth: null,
      gender: null,
      weight: null,
      height: null
    }
  },
  methods: {
    guardarInfo: function () {
      this.$store.state.sesion.token = this.token
      this.$store.state.sesion.email = this.realemail
      this.$store.state.sesion.name = this.token
      this.$store.state.sesion.nickName = this.token
      this.$store.state.sesion.dateOfBirth = this.dateOfBirth
      this.$store.state.sesion.weight = this.weight
      this.$store.state.sesion.height = this.height
      this.$store.state.sesion.gender = this.gender
    },
    ingresar: function (rt) {
      if (rt === 200) {
        this.confirmation = false
        this.existe = false
        this.$router.push({ name: 'Feed' })
        this.realemail = this.email
        this.guardarInfo()
      }
      if (rt === 403) {
        this.confirmation = false
        this.existe = true
      }
      if (rt === 400) {
        this.confirmation = true
        this.existe = false
      }
    },
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
        this.token = response.data.token
        this.name = response.data.user.name
        this.nickName = response.data.user.nickName
        this.dateOfBirth = response.data.user.dateOfBirth
        this.weight = response.data.user.weight
        this.gender = response.data.user.gender
        this.height = response.data.user.height
        this.ingresar(response.status)
      }).catch(e => {
        this.ingresar(e.response.status)
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
#warning{
  background-color: #bf202c;
  padding: 10px;
}
#warning p{
  color: #FFFBF4;
  font-family: 'Roboto';
  font-size: 10px;
  line-height: 1em
}
#LoginForm {
    background-color: #FFFBF4;
    border-radius: 0.5rem;
    padding: 16px;
    width: 15rem;
    bottom: 0px;
    margin-left:auto;
    margin-right:auto;
    text-align: center
}

#LoginButtons #aceptar {
  background-color: #1d85cd;
}

#LoginButtons #registrar {
  background-color: #bf202c;
}
</style>
