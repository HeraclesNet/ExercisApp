<template>
  <div class="user">
  <NavBarHome/>
  <div id="nombre">
    <h1>{{this.name}}</h1>
  </div>
  <div id="options">
    <md-button :to="{name:'Feed'}" style="background-color:#fff; color:#ee2d2b" >Pagina Principal</md-button>
    <md-button style="background-color:#fff; color:#ee2d2b" v-on:click="changeDisplay('profile')">Informacion Personal</md-button>
    <md-button style="background-color:#fff; color:#ee2d2b" v-on:click="changeDisplay('postHistory')">Publicaciones pasadas</md-button>
    <md-button style="background-color:#fff; color:#ee2d2b" v-on:click="changeDisplay('rutinas')">Rutinas</md-button>
  </div>
  <!-- Info Usuario -->
  <div id="profile" v-if="displaying === 'profile'">
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
          <md-input v-model="name" :disabled="disabled"></md-input>
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
          <md-input v-model="born" :disabled="disabled"></md-input>
        </md-field>
        <md-field>
          <label>Edad</label>
          <md-input v-model="age" :disabled="disabled"></md-input>
        </md-field>
        <md-field>
          <label>Nickname</label>
          <md-input v-model="nick" :disabled="disabled"></md-input>
        </md-field>
        <md-field>
          <label>Genero</label>
          <md-input v-model="gender" :disabled="disabled"></md-input>
        </md-field>
      </md-card-content>
      <md-card-actions>
        <md-button id="editar" v-if="!isHidden" v-on:click="disabled = !disabled; isHidden = true">Editar Perfil</md-button>
        <md-button v-if="isHidden" v-on:click="disabled = !disabled; isHidden = false" style="color:#fff;background-color:#1d85cd">Guardar Cambios</md-button>
        <md-button style="color:#fff;background-color:#ee2d2b">Eliminar Cuenta</md-button>
      </md-card-actions>
    </md-card>
  </div>
  <!-- Post history Usuario -->
  <div id="PublishedContent" v-if="displaying === 'postHistory'">
    <ul style="padding-left: 0px;">
      <li id="card" is="Post" v-for="content in contents" v-bind:Post= "content" v-bind:key="content.id"></li>
    </ul>
  </div>
  <!-- Rutinas -->
  <div id="Rutinas" v-if="displaying === 'rutinas'"></div>
 </div>
</template>
<script>
import NavBarHome from '@/components/NavBarHome.vue'
// import PostBar from '@/components/PostBar.vue'
import Post from '@/components/Post.vue'
import Posts from '@/Objects/Post.js'
import axios from 'axios'
export default {
  name: 'User',
  beforeCreate () {
    document.querySelector('html').setAttribute('style', 'background-image: url("Background_grey.jpg"); background-size: cover')
  },
  beforeDestroy () {
    document.querySelector('body').setAttribute('style', '')
  },
  created () {
    this.LoadInfo()
  },
  data () {
    return {
      // Relevantes para la vista
      displaying: 'profile',
      contents: null,
      disabled: 1,
      isHidden: false,
      postUser: [],
      // Info usuario
      name: null,
      peso: null,
      altura: null,
      dateOfBirth: null,
      edad: null, // yo la calculo
      nickname: null,
      visibilidad: null,
      genero: null
    }
  },
  components: {
    NavBarHome,
    // PostBar,
    Post
  },
  methods: {
    LoadInfo: function () {
      this.token = this.$store.state.sesion.token
      this.email = this.$store.state.sesion.email
      this.name = this.$store.state.sesion.name
      this.nickName = this.$store.state.sesion.nickName
      this.dateOfBirth = this.$store.state.sesion.dateOfBirth
      this.weight = this.$store.state.sesion.weight
      this.height = this.$store.state.sesion.height
      this.gender = this.$store.state.sesion.gender
    },
    postear: function (postCreado) {
      this.postUser.push(postCreado)
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
      this.contents = temp
    },
    getPosts: function () {
      axios.get('http://localhost:8081/profile/user',
        {
          headers: {
            Authorization: 'Bearer ' + this.$store.state.sesion.token,
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
          }
        }).then(response => {
        this.transformarContenido(response.data.posts.content)
        console.log(response.data)
      }).catch(e => {
        console.log(e)
      })
    },
    getRutinas: function () {
    },
    clear: function () {
      this.contents = []
      this.postUser = []
    },
    changeDisplay: function (newDisplay) {
      this.clear()
      this.display = newDisplay
      if (newDisplay === 'profile') {
      } else if (newDisplay === 'postHistory') {
        this.getPosts()
      } else if (newDisplay === 'rutinas') {
        this.getRutinas()
      }
    },
    setProfile1: function () {
      axios.get('http://localhost:8081/profile/user',
        {
          headers: {
            Authorization: 'Bearer ' + this.$store.state.sesion.token,
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
          }
        }).then(response => {
        this.transformarContenido(response.data.posts.content)
        console.log(response.data)
      }).catch(e => {
        console.log(e)
      })
    },
    setProfile2: function () {
      axios.get('http://localhost:8081/profile/user',
        {
          headers: {
            Authorization: 'Bearer ' + this.$store.state.sesion.token,
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
          }
        }).then(response => {
        this.transformarContenido(response.data.posts.content)
        console.log(response.data)
      }).catch(e => {
        console.log(e)
      })
    }
  }
}
</script>
<style>
#profile{
  font-family: 'TTOctosquares-Regular Regular';
  display: flex;
  align-content: space-around;
  flex-flow: wrap;
  margin: 20px;
}
#avatar{
  font-family: 'TTOctosquares-Regular Regular';
  margin: 15px;
}
#profile-data{
  font-family: 'TTOctosquares-Regular Regular';
  margin: 15px;
  width: 50%;
}
#options{
  font-family: 'TTOctosquares-Regular Regular';
  margin-left: 10px;
}
</style>
