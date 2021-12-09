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
  data () {
    return {
      users: []
    }
  },
  components: {
    Welcome,
    NavBarInit
  }
}
</script>
