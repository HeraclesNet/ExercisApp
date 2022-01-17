<template>
  <div class="feed" v-on:="">
  <NavBarHome/>
  <!-- Filtros -->
  <div id="filtros">
    <md-button style="background-color:#fff; color:#ee2d2b" v-on:click="changeFiltro('votos')">Mas Gustados</md-button>
    <md-button style="background-color:#fff; color:#ee2d2b" v-on:click="changeFiltro('nuevo')">Mas Nuevos</md-button>
    <md-button style="background-color:#fff; color:#ee2d2b" v-on:click="changeFiltro('destacado')">Destacados</md-button>
  </div>
  <PostBar v-on:PostCreado="postear($event)"/>
  <div id="content">
    <ul style="padding-left: 0px;">
      <li id="card" is="Post" v-for="Posts in postUser" v-bind:Post= "Posts" v-bind:key="Posts.id"></li>
    </ul>
    <div class="break"></div>
    <div>
      <ul style="padding-left: 0px;">
        <li id="card" is="Post" v-for="content in contents" v-bind:Post= "content" v-bind:key="content.id"></li>
      </ul>
    </div>
    <div v-if="filtro === 'nuevo'">
      <ul style="padding-left: 0px;">
        <li id="card" is="Post" v-for="content in contents" v-bind:Post= "content" v-bind:key="content.id"></li>
      </ul>
    </div>
    <div class="break"></div>
    <div v-if="filtro === 'destacado'">
      <ul style="padding-left: 0px;">
        <li id="card" is="Post" v-for="content in contents" v-bind:Post= "content" v-bind:key="content.id"></li>
      </ul>
    </div>
    <div class="break"></div>
    <div v-if="filtro === 'votos'">
      <ul style="padding-left: 0px;">
        <li id="card" is="Post" v-for="content in contents" v-bind:Post= "content" v-bind:key="content.id"></li>
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
import Posts from '@/Objects/Post.js'
import axios from 'axios'
export default {
  name: 'Home',
  beforeCreate () {
    document.querySelector('html').setAttribute('style', 'background: #36393e')
  },
  beforeDestroy () {
    document.querySelector('body').setAttribute('style', '')
  },
  created () {
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
      filtro: 'destacado',
      postUser: []
    }
  },
  components: {
    NavBarHome,
    PostBar,
    Post
  },
  // metodo para Paginacion
  methods: {
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
        temp.push(posts)
      }
      this.contents = temp
    },
    // Agregar parametros de filtrados
    getDataDestacados: function () {
      const params = new URLSearchParams()
      params.append('size', 10)
      params.append('number', 0)
      params.append('sort', 'muscles')
      axios.get('http://localhost:8081/user/posts?' + params.toString(),
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
          this.transformarContenido(response.data.content)
        }
      }).catch(e => {
        console.log(e)
      })
    },
    getDataNuevos: function () {
      const params = new URLSearchParams()
      params.append('size', 10)
      params.append('number', 0)
      params.append('sort', 'createdAt')
      axios.get('http://localhost:8081/user/posts?' + params.toString(),
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
          this.transformarContenido(response.data.content)
        }
      }).catch(e => {
        console.log(e)
      })
    },
    getDataVotos: function () {
      const params = new URLSearchParams()
      params.append('size', 10)
      params.append('number', 0)
      params.append('sort', 'muscles')
      axios.get('http://localhost:8081/user/posts?' + params.toString(),
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
          this.transformarContenido(response.data.content)
        }
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
        this.getDataNuevos()
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
  font-size: 30px;
  }
#content{
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  align-content: center;
}
#content.ul{
  padding-left: 0;
}
#card {
  display: flex;
  justify-content: center;
}
.break {
  flex-basis: 100%;
  height: 0;
}
#filtros{
  margin-left: 10px;
}
</style>
