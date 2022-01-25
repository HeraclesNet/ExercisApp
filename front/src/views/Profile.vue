<template>
  <div class="profile">
    <NavBarHome/>
    <div id="nombre">
      <h1>{{this.nickName}}</h1>
    </div>
    <div>
      <md-button :to="{name:'Feed'}" style="color:#FFFBF4"> volver </md-button>
      <md-button style="background-color:#fff; color:#ee2d2b;" v-if="liked" v-on:click="postNoSeguir()"> Ya estas siguiendo este usuario </md-button>
      <md-button style="background-color:##ee2d2b; color:#fff;" v-if="liked" v-on:click="postSeguir()"> Seguir Usuario </md-button>
    </div>
    <div>
      <div id="profile">
     <md-card id="avatar">
       <md-card-header>
          <div class="md-title">Imagen</div>
       </md-card-header>
      <md-card-media>
        <img src="../assets/avatar_default-01.png" alt="Usuario">
      </md-card-media>
    </md-card>
    <md-card id="profile-data">
      <md-card-header>
        <div class="md-title">Perfil</div>
      </md-card-header>
      <md-card-content>
        <md-field>
          <label>Nombre</label>
          <md-input v-model="name" disabled></md-input>
        </md-field>
        <md-field>
          <label>Peso</label>
          <md-input v-model="weight" :disabled="disabled"></md-input>
        </md-field>
        <md-field>
          <label>Altura</label>
          <md-input v-model="height" :disabled="disabled"></md-input>
        </md-field>
        <md-field>
          <label>Fecha de Nacimiento</label>
          <md-input v-model="dateOfBirth" disabled></md-input>
        </md-field>
        <md-field>
          <label>Edad</label>
          <md-input v-model="age" :disabled="disabled"></md-input>
        </md-field>
        <md-field>
          <label>Nickname</label>
          <md-input v-model="nickname" disabled></md-input>
        </md-field>
        <md-field>
          <label>Genero</label>
          <md-input v-model="gender" disabled></md-input>
        </md-field>
        <md-radio v-model="radio">Mi perfil es visible para todos los Usuario</md-radio>
        <md-radio v-model="radio">Mi Perfil es Privado</md-radio>
      </md-card-content>
      <md-button :to="{name:'Feed'}" style="color:#FFFBF4"> volver </md-button>
      <md-button style="color:#FFFBF4" v-on:click="postSeguir()"> seguir </md-button>
    </md-card>
    </div>
    </div>
    <div id="userPost" style="padding-left: 0px;">
      <ul>
        <li is="Post" v-for="Posts in userPosts" v-bind:Post= "Posts" v-bind:key="Posts.id"></li>
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
    this.getData()
    this.getPosts()
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
    getPosts: function () {
      const params = new URLSearchParams()
      params.append('nickName', this.nickName)
      axios.get('http://localhost:8081/post/user?' + params.toString(),
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
          this.transformarContenido(response.data)
        }
        console.log(response.data)
      }).catch(e => {
        console.log(e)
      })
    },
    getData: function () {
      const params = new URLSearchParams()
      params.append('nickName', this.nickName)
      axios.get('http://localhost:8081/profile/user?' + params.toString(),
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
          console.log(response.data)
          this.email = response.data.user.email
          this.name = response.data.user.name
          this.nickName = response.data.user.nickName
          this.dateOfBirth = response.data.user.dateOfBirth
          this.weight = response.data.user.weight
          this.gender = response.data.user.gender
          this.height = response.data.user.height
          // this.visibilidad = response.data.user.visibilidad
          this.seguido = response.data.followed
          console.log('a', this.seguido)
          console.log(response.data.followed)
        }
        console.log(response.data)
      }).catch(e => {
        console.log(e)
      })
    }
  }
}
</script>
