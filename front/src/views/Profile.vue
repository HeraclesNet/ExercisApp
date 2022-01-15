<template>
  <div class="profile">
    <NavBarHome/>
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
    <!-- <div>
      <md-button :to="{name:'Feed'}" style="color:#FFFBF4"> volver </md-button>
      <md-button style="color:#FFFBF4" v-on:click="seguir()"> seguir </md-button>
    </div> -->
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
    },
    noSeguir: function () {
      // se envia el nickname con el token
    },
    postNoSeguir: function () {

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
      // con el nickname
      axios.get('http://localhost:8081/user/posts',
        {
          headers: {
          }
        }).then(response => {
        this.email = response.data.user.email
        this.name = response.data.user.name
        this.nickName = response.data.user.nickName
        this.dateOfBirth = response.data.user.dateOfBirth
        this.weight = response.data.user.weight
        this.gender = response.data.user.gender
        this.height = response.data.user.height
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
