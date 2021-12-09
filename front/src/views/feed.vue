<template>
  <div class="feed">
    <NavBarHome/>
    <h1>Login exitoso</h1>
  </div>
</template>
<script>
import NavBarHome from '@/components/NavBarHome.vue'
export default {
  name: 'Home',
  data () {
    return {
      user: []
    }
  },
  components: {
    NavBarHome
  }
}
</script>
