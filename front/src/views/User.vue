<template>
  <div class="user">
  <NavBarHome/>
  <div id="nombre">
      <h1>{{this.nickName}}</h1>
    </div>
  <!-- Info Usuario -->
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
          <md-input v-model="disabled" disabled></md-input>
        </md-field>
        <md-field>
          <label>Fecha de Nacimiento</label>
          <md-input v-model="disabled" disabled></md-input>
        </md-field>
        <md-field>
          <label>Dato1</label>
          <md-input v-model="disabled" disabled></md-input>
        </md-field>
        <md-field>
          <label>Dato2</label>
          <md-input v-model="disabled" disabled></md-input>
        </md-field>
      </md-card-content>
      <md-card-actions>
        <md-button>Editar Perfil</md-button>
        <md-button style="color:#fff;background-color:#ee2d2b">Eliminar Cuenta</md-button>
      </md-card-actions>
    </md-card>
  </div>
  <!-- Post history Usuario -->
  <div id="PublishedContent">
    <div id="NewPost">
      <ul>
        <li is="Post" v-for="Posts in postUser" v-bind:Post= "Posts" v-bind:key="Posts.id"></li>
      </ul>
    </div>
    <div id="PostHystory">
      <ul>
        <li is="Post" v-for="content in contents" v-bind:Post= "content" v-bind:key="content.id"></li>
      </ul>
    </div>
  </div>
 </div>
</template>
<script>
import NavBarHome from '@/components/NavBarHome.vue'
// import PostBar from '@/components/PostBar.vue'
import Post from '@/components/Post.vue'
import axios from 'axios'
export default {
  name: 'User',
  Created () {
    this.getPosts()
    this.LoadInfo()
  },
  data () {
    return {
      name: null,
      peso: null,
      altura: null,
      dateOfBirth: null,
      edad: null, // yo la calculo
      nickname: null,
      visibilidad: null,
      genero: null,
      contents: null,
      postUser: []
    }
  },
  components: {
    NavBarHome,
    // PostBar,
    Post
  },
  methods: {
    // 2 post
    // peso altura nickname
    // visibilidad genero
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
    getPosts: function () {
      axios.get('http://localhost:8081/user/posts',
        {
          headers: {
          }
        }).then(response => {
        this.transformarContenido(response.data.posts)
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
</style>
