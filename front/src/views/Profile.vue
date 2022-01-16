<template>
  <div class="profile">
    <NavBarHome/>
    <div id="nombre">
      <h1>{{this.nickName}}</h1>
    </div>
    <div>
      <md-button :to="{name:'Feed'}" style="color:#FFFBF4"> volver </md-button>
      <md-button style="color:#FFFBF4" v-on:click="seguir()"> seguir </md-button>
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
import axios from 'axios'
export default {
  name: 'Profile',
  Created () {
    this.getData()
  },
  props: {
    nickName: String
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
      userPosts: null
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
      params.append('nickName', this.nickName)
      axios.post('http://localhost:8081/login', params,
        {
          headers: {
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
      params.append('nickName', this.nickName)
      axios.post('http://localhost:8081/login', params,
        {
          headers: {
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
      for (let i = 0; i <= contenido.length; i++) {
        const post = new Post(contenido.id, contenido.user, contenido.post, contenido.hasFiles, contenido.file.url)
        post.setMuscles(contenido.muscles)
        post.setMediaType(contenido.files.type)
        post.setnickName(contenido.user.nickname)
        post.setLiked(contenido.muscle)
        temp.push(post)
      }
      this.contents = temp
    },
    getdata: function () {
      axios.get('http://localhost:8081/user/posts',
        {
          headers: {
            nickName: 'Bearer ' + this.nickName
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
