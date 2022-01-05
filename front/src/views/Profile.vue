<template>
  <div class="profile">
    <md-button :to="{name:'Feed'}" style="color:#FFFBF4"> volver </md-button>
    <md-button style="color:#FFFBF4" v-on:click="seguir()"> seguir </md-button>
 </div>
</template>
<script>
export default {
  name: 'Profile',
  created: function () {
    this.getData()
  },
  data () {
    return {
      info: null
    }
  },
  methods: {
    seguir: function (){

    },
    postseguir: function (){

    },
    getdata: function (){
      axios.get('http://localhost:8081/user/posts',
        {
          headers: {
          }
        }).then(response => {
        this.info = response.data.info
        console.log(response.data)
      }).catch(e => {
        console.log(e)
      })
    }
  }
}
</script>