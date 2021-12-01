<template>
  <div class="Home">
    <div id="app"><welcome/></div>
  </div>
</template>
<script>
import Welcome from '@/components/Welcome.vue'
export default {
  name: 'Home',
  data () {
    return {
      users: []
    }
  },
  components: {
    Welcome
  }
}
</script>
