<template>
  <div class="home">
    <NavBarInit/>
    <div id = "logo">
      <!-- <img src="..\assets\Appxercise-02.png"> -->
      <LoginBox/>
    </div>
  </div>
</template>

<script>
import LoginBox from '@/components/LoginBox.vue'
import NavBarInit from '@/components/NavBarInit.vue'
export default {
  name: 'Inicio',
  components: {
    LoginBox,
    NavBarInit
  }
}
</script>

<style>
.home {
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
