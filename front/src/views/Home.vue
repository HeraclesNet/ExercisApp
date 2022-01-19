<template>
  <div class="Home">
    <NavBarInit/>
    <div id="app"><welcome/></div>
  </div>
</template>
<script>
import Welcome from '@/components/Welcome.vue'
import NavBarInit from '@/components/NavBarInit.vue'
export default {
  name: 'Home',
  beforeCreate () {
    document.querySelector('html').setAttribute('style', 'background-image: url("full-shot-people-doing-lunges-red.jpg"); background-size: cover')
  },
  beforeDestroy () {
    document.querySelector('body').setAttribute('style', '')
  },
  data () {
    return {
    }
  },
  components: {
    Welcome,
    NavBarInit
  }
}
</script>
