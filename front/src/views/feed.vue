<template>
  <div class="feed">
    <NavBarHome/>
    <conf/>
  </div>
</template>
<script>
import NavBarHome from '@/components/NavBarHome.vue'
import Conf from '@/components/Confirmacion.vue'
export default {
  name: 'Home',
  data () {
    return {
      user: []
    }
  },
  components: {
    NavBarHome,
    Conf
  }
}
</script>

<style>
.feed {
  font-family: 'TTOctosquares-Regular Regular';
  color: #fff;
  font-size: 30px;
}
</style>
