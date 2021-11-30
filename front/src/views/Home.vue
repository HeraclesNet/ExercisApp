<template>
  <div class="Home">
    <div id="app"><welcome/></div>
    <div>
      <ul>
        <li v-for="(users,index) in users" :key="index">
          <h3>{{users.name}}</h3>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import Welcome from '@/components/Welcome.vue'
import axios from 'axios'
export default {
  name: 'Home',
  created () {
    axios.get('https://jsonplaceholder.typicode.com/users').then((response) => { this.users = response.data })
  },
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
