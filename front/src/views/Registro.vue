<template>

  <div class="registro">
    <NavBarInit/>
    <div id = "logo">
      <!-- <img src="..\assets\Appxercise-02.png"> -->
      <component v-bind:is="componente" v-on:aceptar="changeComponente($event)"></component>
    </div>
  </div>
</template>

<script>
import CreateUser from '@/components/CreateUser.vue'
import Confirmacion from '@/components/Confirmacion.vue'
import NavBarInit from '@/components/NavBarInit.vue'
export default {
  name: 'Registro',
  methods: {
    changeComponente: function () {
      this.componente = 'Confirmacion'
    }
  },
  components: {
    CreateUser,
    Confirmacion,
    NavBarInit
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
