<template>
  <form id ="LoginForm">
    <input type="email" v-model="email">
    <input type="password" v-model="password">
    <div id = "LoginButtons">
      <button id="aceptar">
        Iniciar Sesion
      </button>
      <button id="registrar" v-on:click="getData()">
        Registrarse
      </button>
    </div>
  </form>
</template>

<script>
import axios from "axios";
export default {
  name: "LoginBox",
  data(){
    return{
        email:null,
        password:null
    }
  },
  methods:{
    getData(){
      console.warn("values:", this.email,this.password)
    }
  },
  created() {
    axios.get("https://jsonplaceholder.typicode.com/todos/1").then((result) => {
      console.log(result.data);
    })
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
  font-family: 'Josefin Sans', sans-serif;
}

#LoginForm {
    box-shadow: 0 0.65rem 1rem rgba(0,0,0,1);
    background-color: #FFFBF4;
    border-radius: 0.5rem;
    padding: 1rem 0rem;
    display: block;
    width: 15rem;
    margin-left: 60rem;
    margin-top: -23rem;
}

#LoginForm input {
  height: 1.5rem;
  background-color: #DBDBDB;
  margin: 1rem 0;
  border-radius: 0.2rem;
  border-color: #DBDBDB;
  border: 0;
}

#LoginButtons #aceptar {
  background-color: #08C0FF;
}

#LoginButtons #registrar {
  background-color: #D71400;
}
</style>
