<template>
  <div class="registro">
    <div id = "logo">
      <img src="../assets/Appxercise-02.png">
      <!-- <img src="..\assets\Appxercise-02.png"> -->
      <CreateUser/>
    </div>
  </div>
</template>

<script>
import CreateUser from '@/components/CreateUser.vue'
export default {
  name: 'Registro',
  components: {
    CreateUser
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
