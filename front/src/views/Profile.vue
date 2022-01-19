<template>
  <div class="profile">
    <NavBarHome/>
    <div id="nombre">
      <h1>{{this.nickName}}</h1>
    </div>
    <div>
      <md-button :to="{name:'Feed'}" style="color:#FFFBF4"> volver </md-button>
      <md-button style="color:#FFFBF4" v-on:click="postSeguir()"> seguir </md-button>
    </div>
    <div id="userPost">
      <ul>
        <li is="Post" v-for="Posts in userPost" v-bind:Post= "Posts" v-bind:key="Posts.id"></li>
    </ul>
    </div>
 </div>
</template>
<script>
import NavBarHome from '@/components/NavBarHome.vue'
import Post from '@/components/Post.vue'
import Posts from '@/Objects/Post.js'
import axios from 'axios'
export default {
  name: 'Profile',
  beforeCreate () {
    document.querySelector('html').setAttribute('style', 'background-image: url("Background_grey.jpg"); background-size: cover')
  },
  beforeDestroy () {
    document.querySelector('body').setAttribute('style', '')
  },
  created () {
    // this.getData()
    console.log(this.nickName)
    console.log('test')
  },
  props: {
    nickName: String
  },
  computed: {
    sesion () {
      return this.$store.state.sesion
    }
  },
  data () {
    return {
      email: null,
      name: null,
      visibilidad: null,
      dateOfBirth: null,
      gender: null,
      weight: null,
      height: null,
      userPosts: null,
      seguido: false
    }
  },
  components: {
    NavBarHome,
    Post
  },
  methods: {
    seguir: function () {
    // se envia el nickname con el token
    },
    postSeguir: function () {
      const params = new URLSearchParams()
      params.append('userToFollow', this.nickName)
      axios.put('http://localhost:8081/user/new/fan', params,
        {
          headers: {
            Authorization: 'Bearer ' + this.$store.state.sesion.token,
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
          }
        }).then(response => {
        if (response.status !== 200) {
          alert('Error en la petición. Intente nuevamente')
        } else {
          this.seguir()
        }
      }).catch(e => {
        console.log(e)
      })
    },
    noSeguir: function () {
      // se envia el nickname con el token
    },
    postNoSeguir: function () {
      const params = new URLSearchParams()
      params.append('userToFollow', this.nickName)
      axios.delete('http://localhost:8081/user/remove/fan', params,
        {
          headers: {
            Authorization: 'Bearer ' + this.$store.state.sesion.token,
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
          }
        }).then(response => {
        if (response.status !== 200) {
          alert('Error en la petición. Intente nuevamente')
        } else {
          this.noSeguir()
        }
      }).catch(e => {
        console.log(e)
      })
    },
    transformarContenido: function (contenido) {
      var temp = []
      for (let i = 0; i < contenido.length; i++) {
        const posts = new Posts(contenido[i].id, contenido[i].user.name, contenido[i].post, contenido[i].hasFiles)
        if (contenido[i].hasFiles === true) {
          posts.setUrl(contenido[i].files[0].url)
          posts.setMediaType(contenido[i].files[0].type)
        }
        posts.setMuscles(contenido[i].muscles)
        posts.setNickName(contenido[i].user.nickName)
        posts.setLiked(contenido[i].muscle)
        temp.unshift(posts)
      }
      this.userPosts = temp
    },
    getdata: function () {
      const params = new URLSearchParams()
      params.append('userTo', this.nickName)
      axios.get('http://localhost:8081/user/posts',
        {
          headers: {
            Authorization: 'Bearer ' + this.$store.state.sesion.token,
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
          }
        }).then(response => {
        if (response.status !== 200) {
          alert('Error en la petición. Intente nuevamente')
        } else {
          this.email = response.data.user.email
          this.name = response.data.user.name
          this.nickName = response.data.user.nickName
          this.dateOfBirth = response.data.user.dateOfBirth
          this.weight = response.data.user.weight
          this.gender = response.data.user.gender
          this.height = response.data.user.height
          this.transformarContenido(response.data.posts)
        }
        console.log(response.data)
      }).catch(e => {
        console.log(e)
      })
    }
  }
}
</script>
