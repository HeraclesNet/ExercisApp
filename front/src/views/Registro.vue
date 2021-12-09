<template>
  <div class="registro">
    <div id = "logo">
      <!-- <img src="..\assets\Appxercise-02.png"> -->
      <component v-bind:is="componente" v-on:aceptar="changeComponente($event)"></component>
    </div>
  </div>
</template>

<script>
import CreateUser from '@/components/CreateUser.vue'
import Confirmacion from '@/components/Confirmacion.vue'
export default {
  name: 'Registro',
  methods: {
    changeComponente: function () {
      this.componente = 'Confirmacion'
    }
  },
  components: {
    CreateUser,
    Confirmacion
  },
  data () {
    return {
      componente: 'CreateUser'
    }
  }
}
</script>
<style>
.registro {
  font-family: 'TTOctosquares-Regular Regular';
  text-align: center;
  color: #fff;
  font-size: 30px
}

#logo {
  color : #FFFBF4;
}
#logo p{
  font-family: 'Josefin Sans', sans-serif;
  font-size: 25px;
}

</style>
