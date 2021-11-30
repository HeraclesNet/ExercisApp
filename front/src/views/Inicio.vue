<template>
  <div class="home">
    <div id = "logo">
      <img src="..\assets\Appxercise-02.png">
      <LoginBox/>
    </div>
  </div>
</template>

<script>
import LoginBox from '@/components/LoginBox.vue'
export default {
  name: 'Inicio',
  components: {
    LoginBox
  }
}
</script>

<style>
.home {
  font-family: 'TTOctosquares-Regular Regular';
  text-align: center;
  color: #fff;
  font-size: 30px
}

#logo {
  color : #FFFBF4;
}

#logo h1 {
  margin: 0;
  padding: 0.1rem;
  display: inline;
  font-weight: 500;
  letter-spacing: 0.2rem;
  font-family: 'Road Rage', cursive;
  font-size: 8rem;
}

#logo h2 {
  margin: 0;
  padding: 0.1rem;
  display: inline;
  font-size: 0.8rem;
}

#logo p{
  font-family: 'Josefin Sans', sans-serif;
  font-size: 25px;
}

</style>
