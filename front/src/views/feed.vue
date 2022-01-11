<template>
  <div class="feed" v-on:="">
  <NavBarHome/>
  <PostBar v-on:PostCreado="postear($event)"/>
  <!-- Filtro -->
  <div id="filtros">
    <md-button v-on:click="changeFiltro('votos')">Mas Gustados</md-button>
    <md-button v-on:click="changeFiltro('nuevo')">Mas Nuevos</md-button>
    <md-button v-on:click="changeFiltro('destacado')">Destacados</md-button>
  </div>
  <div id="content">
    <ul>
      <li is="Post" v-for="Posts in postUser" v-bind:Post= "Posts" v-bind:key="Posts.id"></li>
    </ul>
    <div v-if="filtro === 'nuevo'">
      <ul>
        <li is="Post" v-for="content in contents" v-bind:Post= "content" v-bind:key="content.id"></li>
      </ul>
    </div>
    <div v-if="filtro === 'destacado'">
      <ul>
        <li is="Post" v-for="content in contents" v-bind:Post= "content" v-bind:key="content.id"></li>
      </ul>
    </div>
    <div v-if="filtro === 'votos'">
      <ul>
        <li is="Post" v-for="content in contents" v-bind:Post= "content" v-bind:key="content.id"></li>
      </ul>
    </div>
    <div class="break"></div>
  </div>
</div>
</template>
<script>
import NavBarHome from '@/components/NavBarHome.vue'
import PostBar from '@/components/PostBar.vue'
import Post from '@/components/Post.vue'
import axios from 'axios'
export default {
  name: 'Home',
  beforeCreate () {
    document.querySelector('html').setAttribute('style', 'background: #36393e')
  },
  beforeDestroy () {
    document.querySelector('body').setAttribute('style', '')
  },
  Created () {
    this.getDataDestacados()
  },
  computed: {
    sesion () {
      return this.$store.state.sesion
    }
  },
  data () {
    return {
      contents: null,
      filtro: 'destacados',
      postUser: []
    }
  },
  components: {
    NavBarHome,
    PostBar,
    Post
  },
  methods: {
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
    // Agregar parametros de filtrados
    getDataDestacados: function () {
      axios.get('http://localhost:8081/user/posts',
        {
          headers: {
            Authorization: 'Bearer ' + this.$store.state.sesion.token
          }
        }).then(response => {
        this.transformarContenido(response.data.content)
        console.log(response.data)
      }).catch(e => {
        console.log(e)
      })
    },
    getDataNuevos: function () {
      axios.get('http://localhost:8081/user/posts',
        {
          headers: {
            Authorization: 'Bearer ' + this.$store.state.sesion.token
          }
        }).then(response => {
        this.transformarContenido(response.data.content)
        console.log(response.data)
      }).catch(e => {
        console.log(e)
      })
    },
    getDataVotos: function () {
      axios.get('http://localhost:8081/user/posts',
        {
          headers: {
            Authorization: 'Bearer ' + this.$store.state.sesion.token
          }
        }).then(response => {
        this.transformarContenido(response.data.content)
        console.log(response.data)
      }).catch(e => {
        console.log(e)
      })
    },
    clear: function () {
      this.contents = []
      this.postUser = []
    },
    changeFiltro: function (newFiltro) {
      this.clear()
      this.filtro = newFiltro
      if (newFiltro === 'destacado') {
        this.getDataDestacados()
      } else if (newFiltro === 'nuevo') {
        this.getDataNuevo()
      } else if (newFiltro === 'votos') {
        this.getDataVotos()
      }
    }
  }
}
</script>

<style>
.feed {
  font-family: 'TTOctosquares-Regular Regular';
  color: #fff;
  font-size: 30px;
  }
#comment{
  display: block;
  flex-flow: wrap
}
#card {
  margin: 4px;
  display: flex;
  justify-content: center;
}
.break {
  flex-basis: 100%;
  height: 0;
}
</style>
